import { useState, useRef, useEffect } from 'react';
import styles from './Classic.module.scss';
import { useTodayDaily, fetchProductsBySearch, fetchProductByName, fetchUserGuesses, saveGuess } from '../../hooks/useDaily';
import type { DailyProduct } from '../../hooks/useDaily';
import { API_URL } from '../../hooks/useProducts';
import hintImage from '../../assets/hint.png';
import { getUserId } from '../../utils/userId';

const MAX_GUESSES = 15;

type Direction = 'correct' | 'up' | 'down' | 'wrong';

interface GuessRow {
    product: DailyProduct;
    result: {
        name: Direction;
        brand: Direction;
        category: Direction;
        weight: Direction;
        price: Direction;
    };
}

const compareNumeric = (guessed: number, target: number): Direction => {
    if (guessed === target) return 'correct';
    return guessed < target ? 'up' : 'down';
};

const compareString = (guessed: string, target: string): Direction => {
    return guessed.toLowerCase() === target.toLowerCase() ? 'correct' : 'wrong';
};

const parseWeight = (w: string): number => parseFloat(w.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

const evaluateGuess = (guessed: DailyProduct, target: DailyProduct): GuessRow['result'] => ({
    name: compareString(guessed.name, target.name),
    brand: compareString(guessed.brand, target.brand),
    category: compareString(guessed.category, target.category),
    weight: compareNumeric(parseWeight(guessed.weight), parseWeight(target.weight)),
    price: compareNumeric(Number(guessed.price), Number(target.price)),
});

const COLUMNS = ['Nazwa', 'Marka', 'Kategoria', 'Waga', 'Cena'];
const KEYS = ['name', 'brand', 'category', 'weight', 'price'] as const;

const DirectionIcon = ({ dir }: { dir: Direction }) => {
    if (dir === 'correct') return <span className={styles.IconCorrect}>✓</span>;
    if (dir === 'up') return <span className={styles.IconUp}>↑</span>;
    if (dir === 'down') return <span className={styles.IconDown}>↓</span>;
    return <span className={styles.IconWrong}>✗</span>;
};

const formatValue = (key: typeof KEYS[number], product: DailyProduct): string => {
    if (key === 'price') return `${Number(product.price).toFixed(2)} zł`;
    return String(product[key]);
};

export const Classic = () => {
    const { data: target, isLoading, isError } = useTodayDaily();

    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<{ id: number; name: string }[]>([]);
    const [guesses, setGuesses] = useState<GuessRow[]>([]);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [initialized, setInitialized] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const userId = getUserId();
    const guessedNames = guesses.map((g) => g.product.name.toLowerCase());
    const remaining = MAX_GUESSES - guesses.length;
    const targetImage = target?.product_image?.image_url;

    useEffect(() => {
        if (!target || initialized) return;
        const loadGuesses = async () => {
            try {
                const saved = await fetchUserGuesses(userId);
                if (saved && saved.length) {
                    const today = new Date().toDateString();
                    const filtered = saved.filter((g: any) => {
                        const guessDate = new Date(g.created_at).toDateString();
                        return guessDate === today;
                    });
                    filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
                    const rows: GuessRow[] = filtered.map((g: any) => {
                        const product: DailyProduct = {
                            id: g.product_id,
                            name: g.name,
                            brand: g.brand,
                            category: g.category,
                            weight: g.weight,
                            price: typeof g.price === 'string' ? parseFloat(g.price) : g.price,
                        };
                        return {
                            product,
                            result: evaluateGuess(product, target!),
                        };
                    });
                    setGuesses(rows);
                    const lastRow = rows[rows.length - 1];
                    const isWin = lastRow?.result.name === 'correct' && lastRow?.result.brand === 'correct' &&
                        lastRow?.result.category === 'correct' && lastRow?.result.weight === 'correct' &&
                        lastRow?.result.price === 'correct';
                    if (isWin) setWon(true);
                    else if (rows.length >= MAX_GUESSES) setLost(true);
                }
            } catch (err) {
                console.error('Błąd ładowania zgadywań', err);
            } finally {
                setInitialized(true);
            }
        };
        loadGuesses();
    }, [target, userId, initialized]);

    useEffect(() => {
        if (guesses.length > 0) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [guesses]);

    const handleInputChange = async (val: string) => {
        setInput(val);
        setError('');
        setActiveSuggestion(-1);
        if (val.length < 1) { setSuggestions([]); return; }
        try {
            const results = await fetchProductsBySearch(val);
            setSuggestions(results.filter((r) => !guessedNames.includes(r.name.toLowerCase())));
        } catch {
            setSuggestions([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            setActiveSuggestion((p) => Math.min(p + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            setActiveSuggestion((p) => Math.max(p - 1, -1));
        } else if (e.key === 'Enter') {
            if (activeSuggestion >= 0 && suggestions[activeSuggestion]) {
                selectSuggestion(suggestions[activeSuggestion].name);
            } else if (suggestions.length > 0) {
                selectSuggestion(suggestions[0].name);
            } else {
                submitGuess(input);
            }
        } else if (e.key === 'Escape') {
            setSuggestions([]);
        }
    };

    const selectSuggestion = (name: string) => {
        setInput(name);
        setSuggestions([]);
        setActiveSuggestion(-1);
        inputRef.current?.focus();
    };

    const submitGuess = async (name: string) => {
        if (!target || !name.trim() || won || lost || isSubmitting) return;
        if (guessedNames.includes(name.toLowerCase())) {
            setError('Już zgadywałeś ten produkt!');
            return;
        }
        setIsSubmitting(true);
        setError('');
        setSuggestions([]);
        try {
            const product = await fetchProductByName(name.trim());
            const result = evaluateGuess(product, target);
            const row: GuessRow = { product, result };
            const newGuesses = [...guesses, row];
            setGuesses(newGuesses);
            setInput('');

            await saveGuess(userId, product);

            if (result.name === 'correct' && result.brand === 'correct' &&
                result.category === 'correct' && result.weight === 'correct' && result.price === 'correct') {
                setWon(true);
            } else if (newGuesses.length >= MAX_GUESSES) {
                setLost(true);
            }
        } catch (err) {
            console.error(err);
            setError('Nie znaleziono takiego produktu — sprawdź nazwę.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) return (
        <div className={styles.Screen}>
            <div className={styles.Spinner} />
            <p>Ładowanie produktu dnia…</p>
        </div>
    );

    if (isError) return (
        <div className={styles.Screen}>
            <p className={styles.ErrorMsg}>Brak produktu dnia lub błąd API</p>
        </div>
    );

    return (
        <div className={styles.Wrapper}>
            <header className={styles.Header}>
                <h2>Klasyczny</h2>
                <p className={styles.Sub}>Zgadnij produkt z Lidla! Masz <strong>{MAX_GUESSES}</strong> prób.</p>
                <div className={styles.Attempts}>
                    {Array.from({ length: MAX_GUESSES }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.Dot} ${
                                i < guesses.length
                                    ? guesses[i].result.name === 'correct' &&
                                    guesses[i].result.brand === 'correct' &&
                                    guesses[i].result.category === 'correct' &&
                                    guesses[i].result.weight === 'correct' &&
                                    guesses[i].result.price === 'correct'
                                        ? styles.DotWin
                                        : styles.DotUsed
                                    : ''
                            }`}
                        />
                    ))}
                </div>
            </header>

            {!won && !lost && (
                <div className={styles.InputArea}>
                    <button
                        className={`${styles.HintBtn} ${guesses.length >= 5 ? styles.HintBtnActive : styles.HintBtnDisabled}`}
                        onClick={() => guesses.length >= 5 && setShowHint(true)}
                        disabled={guesses.length < 5}
                    >
                        <img src={hintImage} alt="Podpowiedź" style={{ width: '30px', height: '30px' }}/>
                    </button>

                    {showHint && (
                        <div className={styles.HintImage}>
                            <img
                                src={targetImage ? `${API_URL}${targetImage}` : hintImage}
                                alt={target?.name || 'hint'}
                                className={targetImage ? styles.HintImgProduct : styles.HintImgFallback}
                            />
                        </div>
                    )}

                    <div className={styles.InputWrap}>
                        <input
                            ref={inputRef}
                            className={styles.Input}
                            value={input}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Wpisz nazwę produktu…"
                            disabled={isSubmitting}
                            autoComplete="off"
                        />
                        <button
                            className={styles.SubmitBtn}
                            onClick={() => submitGuess(input)}
                            disabled={isSubmitting || !input.trim()}
                        >
                            {isSubmitting ? '…' : 'Zgadnij'}
                        </button>
                    </div>

                    {suggestions.length > 0 && (
                        <ul className={styles.Suggestions}>
                            {suggestions.map((s, i) => (
                                <li
                                    key={s.id}
                                    className={`${styles.Suggestion} ${i === activeSuggestion ? styles.SuggestionActive : ''}`}
                                    onClick={() => selectSuggestion(s.name)}
                                >
                                    {s.name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {error && <p className={styles.ErrorMsg}>{error}</p>}
                    <p className={styles.Remaining}>Pozostało prób: <strong>{remaining}</strong></p>
                </div>
            )}

            {guesses.length > 0 && (
                <div className={styles.TableWrap}>
                    <table className={styles.Table}>
                        <thead>
                        <tr>
                            {COLUMNS.map((col) => (
                                <th key={col}>{col}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {guesses.map((row, i) => (
                            <tr key={i} className={styles.GuessRow} style={{ animationDelay: `${i * 0.04}s` }}>
                                {KEYS.map((key) => (
                                    <td
                                        key={key}
                                        className={`${styles.Cell} ${
                                            row.result[key] === 'correct' ? styles.CellCorrect :
                                                row.result[key] === 'wrong' ? styles.CellWrong :
                                                    styles.CellArrow
                                        }`}
                                    >
                                        <span className={styles.CellValue}>{formatValue(key, row.product)}</span>
                                        <DirectionIcon dir={row.result[key]} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div ref={bottomRef} />
                </div>
            )}

            {won && (
                <div className={styles.Banner} data-type="win">
                    <span>Wow</span>
                    <div>
                        <strong>Brawo! Zgadłeś!</strong>
                        <p>Produkt dnia to: <em>{target?.name}</em></p>
                        <p>Liczba prób: <strong>{guesses.length}</strong></p>
                    </div>
                </div>
            )}

            {lost && (
                <div className={styles.Banner} data-type="lose">
                    <span>sad</span>
                    <div>
                        <strong>Nie udało się…</strong>
                        <p>Produkt dnia to: <em>{target?.name}</em> ({Number(target?.price).toFixed(2)} zł)</p>
                    </div>
                </div>
            )}
        </div>
    );
};