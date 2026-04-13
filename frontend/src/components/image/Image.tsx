import { useState, useRef, useEffect } from 'react';
import styles from './Image.module.scss';
import { useTodayImageDaily, fetchImageUserGuesses, saveImageGuess } from '../../hooks/useImageDaily';
import type { ImageDailyProduct } from '../../hooks/useImageDaily';
import { API_URL } from '../../hooks/useProducts';
import { getUserId } from '../../utils/userId';
import { fetchProductsBySearch, fetchProductByName } from '../../hooks/useDaily';

const MAX_GUESSES = 15;

type Direction = 'correct' | 'wrong';

interface GuessRow {
    product: ImageDailyProduct;
    result: {
        name: Direction;
    };
}

const compareString = (guessed: string, target: string): Direction => {
    return guessed.toLowerCase() === target.toLowerCase() ? 'correct' : 'wrong';
};

const evaluateGuess = (guessed: ImageDailyProduct, target: ImageDailyProduct): GuessRow['result'] => ({
    name: compareString(guessed.name, target.name),
});

const COLUMNS = ['Nazwa'];
const KEYS = ['name'] as const;

const DirectionIcon = ({ dir }: { dir: Direction }) => {
    if (dir === 'correct') return <span className={styles.IconCorrect}>✓</span>;
    return <span className={styles.IconWrong}>✗</span>;
};

const formatValue = (key: typeof KEYS[number], product: ImageDailyProduct): string => {
    return String(product[key]);
};

const getBlurAmount = (guessesCount: number): number => {
    if (guessesCount === 0) return 20;
    if (guessesCount === 1) return 16;
    if (guessesCount === 2) return 12;
    if (guessesCount === 3) return 8;
    if (guessesCount === 4) return 5;
    if (guessesCount === 5) return 3;
    if (guessesCount === 6) return 2;
    if (guessesCount === 7) return 1;
    return 0;
};

export const Image = () => {
    const { data: target, isLoading, isError } = useTodayImageDaily();

    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<{ id: number; name: string }[]>([]);
    const [guesses, setGuesses] = useState<GuessRow[]>([]);
    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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
                const saved = await fetchImageUserGuesses(userId);
                if (saved && saved.length) {
                    const today = new Date().toDateString();
                    const filtered = saved.filter((g: any) => {
                        const guessDate = new Date(g.created_at).toDateString();
                        return guessDate === today;
                    });
                    filtered.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
                    const rows: GuessRow[] = filtered.map((g: any) => {
                        const product: ImageDailyProduct = {
                            id: g.product_id,
                            name: g.name,
                            brand: '',
                            category: '',
                            weight: '',
                            price: 0,
                        };
                        return {
                            product,
                            result: evaluateGuess(product, target),
                        };
                    });
                    setGuesses(rows);
                    const lastRow = rows[rows.length - 1];
                    if (lastRow?.result.name === 'correct') setWon(true);
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

            await saveImageGuess(userId, product);

            if (result.name === 'correct') {
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

    const blurAmount = getBlurAmount(guesses.length);

    return (
        <div className={styles.Wrapper}>
            <header className={styles.Header}>
                <h2>Obrazek</h2>
                <p className={styles.Sub}>Zgadnij produkt z Lidla po obrazku! Masz <strong>{MAX_GUESSES}</strong> prób.</p>
                <div className={styles.Attempts}>
                    {Array.from({ length: MAX_GUESSES }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.Dot} ${
                                i < guesses.length
                                    ? guesses[i].result.name === 'correct'
                                        ? styles.DotWin
                                        : styles.DotUsed
                                    : ''
                            }`}
                        />
                    ))}
                </div>
            </header>


            {targetImage && (
                <div className={styles.ImageContainer}>
                    <img
                        src={`${API_URL}${targetImage}`}
                        alt="Produkt do zgadnięcia"
                        className={styles.BlurredImage}
                        style={{ filter: (won || lost) ? 'blur(0px)' : `blur(${blurAmount}px)` }}
                    />
                </div>
            )}

            {!won && !lost && (
                <div className={styles.InputArea}>
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
                                            row.result[key] === 'correct' ? styles.CellCorrect : styles.CellWrong
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
                        <p>Produkt dnia to: <em>{target?.name}</em></p>
                    </div>
                </div>
            )}
        </div>
    );
};