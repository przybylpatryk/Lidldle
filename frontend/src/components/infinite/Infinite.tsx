import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Infinite.module.scss';
import { useAllProducts } from '../../hooks/useProducts';
import { fetchProductsBySearch } from '../../hooks/useDaily';
import type { Product } from '../../hooks/useProducts';

type Direction = 'correct' | 'up' | 'down' | 'wrong';

interface GuessRow {
    product: Product;
    result: RowResult;
}

interface RowResult {
    name: Direction;
    brand: Direction;
    category: Direction;
    weight: Direction;
    price: Direction;
}

const COLUMNS = ['Nazwa', 'Marka', 'Kategoria', 'Waga', 'Cena'];
const KEYS = ['name', 'brand', 'category', 'weight', 'price'] as const;

const compareNumeric = (guessed: number, target: number): Direction => {
    if (guessed === target) return 'correct';
    return guessed < target ? 'up' : 'down';
};

const compareString = (g: string, t: string): Direction =>
    g.trim().toLowerCase() === t.trim().toLowerCase() ? 'correct' : 'wrong';

const parseWeight = (w: string): number =>
    parseFloat(w.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;

const evaluate = (guessed: Product, target: Product): RowResult => ({
    name: compareString(guessed.name, target.name),
    brand: compareString(guessed.brand, target.brand),
    category: compareString(guessed.category, target.category),
    weight: compareNumeric(parseWeight(guessed.weight), parseWeight(target.weight)),
    price: compareNumeric(Number(guessed.price), Number(target.price)),
});

const isAllCorrect = (r: RowResult) =>
    r.name === 'correct' && r.brand === 'correct' &&
    r.category === 'correct' && r.weight === 'correct' && r.price === 'correct';

const formatValue = (key: typeof KEYS[number], product: Product): string => {
    if (key === 'price') return `${Number(product.price).toFixed(2)} zł`;
    return String(product[key]);
};

const DirectionIcon = ({ dir }: { dir: Direction }) => {
    if (dir === 'correct') return <span className={styles.IconCorrect}>✓</span>;
    if (dir === 'up') return <span className={styles.IconUp}>↑</span>;
    if (dir === 'down') return <span className={styles.IconDown}>↓</span>;
    return <span className={styles.IconWrong}>✗</span>;
};

const pickRandom = (products: Product[], excludeId?: number): Product => {
    const pool = excludeId ? products.filter(p => p.id !== excludeId) : products;
    return pool[Math.floor(Math.random() * pool.length)];
};

export const Infinite = () => {
    const { data: allProducts, isLoading, isError } = useAllProducts();

    const [target, setTarget] = useState<Product | null>(null);
    const [guesses, setGuesses] = useState<GuessRow[]>([]);
    const [won, setWon] = useState(false);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(() =>
        parseInt(localStorage.getItem('inf_best') ?? '0', 10)
    );
    const [totalSolved, setTotalSolved] = useState(0);

    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<{ id: number; name: string }[]>([]);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const lastTargetId = useRef<number | undefined>(undefined);

    const startNewRound = useCallback((products: Product[]) => {
        const newTarget = pickRandom(products, lastTargetId.current);
        lastTargetId.current = newTarget.id;
        setTarget(newTarget);
        setGuesses([]);
        setWon(false);
        setInput('');
        setSuggestions([]);
        setError('');
        setShowSuccess(false);
        setTimeout(() => inputRef.current?.focus(), 100);
    }, []);

    useEffect(() => {
        if (allProducts && allProducts.length > 0 && !target) {
            startNewRound(allProducts);
        }
    }, [allProducts]);

    useEffect(() => {
        if (guesses.length > 0) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [guesses]);

    const guessedNames = guesses.map(g => g.product.name.toLowerCase());

    const handleInputChange = async (val: string) => {
        setInput(val);
        setError('');
        setActiveSuggestion(-1);
        if (val.length < 1) { setSuggestions([]); return; }
        try {
            const results = await fetchProductsBySearch(val);
            setSuggestions(results.filter(r => !guessedNames.includes(r.name.toLowerCase())));
        } catch {
            setSuggestions([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            setActiveSuggestion(p => Math.min(p + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            setActiveSuggestion(p => Math.max(p - 1, -1));
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
        if (!target || !name.trim() || won || isSubmitting) return;
        if (guessedNames.includes(name.trim().toLowerCase())) {
            setError('Już zgadywałeś ten produkt!');
            return;
        }

        // Znajdź produkt po nazwie z allProducts
        const found = allProducts?.find(
            p => p.name.trim().toLowerCase() === name.trim().toLowerCase()
        );

        if (!found) {
            setError('Nie znaleziono takiego produktu — sprawdź nazwę.');
            return;
        }

        setIsSubmitting(true);
        setError('');
        setSuggestions([]);

        const result = evaluate(found, target);
        const row: GuessRow = { product: found, result };
        const newGuesses = [...guesses, row];
        setGuesses(newGuesses);
        setInput('');

        if (isAllCorrect(result)) {
            const newStreak = streak + 1;
            const newTotal = totalSolved + 1;
            setStreak(newStreak);
            setTotalSolved(newTotal);
            if (newStreak > bestStreak) {
                setBestStreak(newStreak);
                localStorage.setItem('inf_best', String(newStreak));
            }
            setWon(true);
            setShowSuccess(true);
        }

        setIsSubmitting(false);
    };

    const handleNext = () => {
        if (allProducts) startNewRound(allProducts);
    };

    const handleSkip = () => {
        setStreak(0);
        if (allProducts) startNewRound(allProducts);
    };

    if (isLoading) return (
        <div className={styles.Screen}>
            <div className={styles.Spinner} />
            <p>Ładowanie produktów…</p>
        </div>
    );

    if (isError || !allProducts) return (
        <div className={styles.Screen}>
            <p className={styles.ErrorMsg}>Błąd połączenia z API 😕</p>
        </div>
    );

    return (
        <div className={styles.Wrapper}>
            {/* Stats bar */}
            <div className={styles.StatsBar}>
                <div className={styles.Stat}>
                    <span className={styles.StatLabel}>Seria</span>
                    <span className={styles.StatValue}>{streak} 🔥</span>
                </div>
                <div className={styles.Stat}>
                    <span className={styles.StatLabel}>Rekord</span>
                    <span className={styles.StatValue}>{bestStreak} 🏆</span>
                </div>
                <div className={styles.Stat}>
                    <span className={styles.StatLabel}>Zgadnięte</span>
                    <span className={styles.StatValue}>{totalSolved}</span>
                </div>
            </div>

            <header className={styles.Header}>
                <h2>Nieskończony</h2>
                <p className={styles.Sub}>Zgaduj produkty jeden po drugim!</p>
            </header>

            {/* Success banner */}
            {showSuccess && (
                <div className={styles.SuccessBanner}>
                    <span>🎉</span>
                    <div>
                        <strong>Zgadłeś!</strong>
                        <p>To był: <em>{target?.name}</em></p>
                    </div>
                    <button className={styles.NextBtn} onClick={handleNext}>
                        Następny →
                    </button>
                </div>
            )}

            {/* Input */}
            {!won && (
                <div className={styles.InputArea}>
                    <div className={styles.InputWrap}>
                        <input
                            ref={inputRef}
                            className={styles.Input}
                            value={input}
                            onChange={e => handleInputChange(e.target.value)}
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

                    <div className={styles.Actions}>
                        <p className={styles.GuessCount}>
                            Próby: <strong>{guesses.length}</strong>
                        </p>
                        <button className={styles.SkipBtn} onClick={handleSkip}>
                            Pomiń (reset serii)
                        </button>
                    </div>
                </div>
            )}

            {/* Guesses table */}
            {guesses.length > 0 && (
                <div className={styles.TableWrap}>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                {COLUMNS.map(col => <th key={col}>{col}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {guesses.map((row, i) => (
                                <tr key={i} className={styles.GuessRow} style={{ animationDelay: `${i * 0.03}s` }}>
                                    {KEYS.map(key => (
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
        </div>
    );
};
