import { useState, useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import styles from './HigherLower.module.scss';
import { useAllProducts } from '../../hooks/useProducts';
import type { Product } from '../../hooks/useProducts';

type Verdict = 'higher' | 'lower' | 'equal' | null;

interface Round {
    left: Product;
    right: Product;
    guess: 'higher' | 'lower';
    correct: boolean;
}

const pickTwo = (products: Product[], exclude?: number[]): [Product, Product] | null => {
    const pool = exclude ? products.filter((p) => !exclude.includes(p.id)) : products;
    if (pool.length < 2) return null;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
};

export const HigherLower = () => {
    const { data: products, isLoading, isError } = useAllProducts();
    const queryClient = useQueryClient();

    const [left, setLeft] = useState<Product | null>(null);
    const [right, setRight] = useState<Product | null>(null);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => {
        return parseInt(localStorage.getItem('hl_best') ?? '0', 10);
    });
    const [verdict, setVerdict] = useState<Verdict>(null);
    const [gameOver, setGameOver] = useState(false);
    const [history, setHistory] = useState<Round[]>([]);
    const [rightRevealed, setRightRevealed] = useState(false);
    const usedIds = useRef<number[]>([]);


    const startGame = (prods: Product[]) => {
        usedIds.current = [];
        setScore(0);
        setHistory([]);
        setVerdict(null);
        setGameOver(false);
        setRightRevealed(false);

        const pair = pickTwo(prods);
        if (!pair) return;
        usedIds.current = [pair[0].id, pair[1].id];
        setLeft(pair[0]);
        setRight(pair[1]);
    };

    useEffect(() => {
        if (products && products.length >= 2 && !left) {
            startGame(products);
        }
    }, [products]);

    const handleGuess = (guess: 'higher' | 'lower') => {
        if (!left || !right || verdict !== null) return;

        setRightRevealed(true);

        const actualVerdict: Verdict =
            right.price > left.price ? 'higher' : right.price < left.price ? 'lower' : 'equal';

        setVerdict(actualVerdict);

        const correct = guess === actualVerdict || actualVerdict === 'equal';

        const round: Round = { left, right, guess, correct };
        setHistory((prev) => [round, ...prev]);

        if (correct) {
            const newScore = score + 1;
            setScore(newScore);
            if (newScore > bestScore) {
                setBestScore(newScore);
                localStorage.setItem('hl_best', String(newScore));
            }

            setTimeout(() => {
                if (!products) return;
                const pair = pickTwo(products, usedIds.current);
                if (!pair) {
                    setGameOver(true);
                    return;
                }
                usedIds.current.push(pair[1].id);
                setLeft(right);
                setRight(pair[1]);
                setVerdict(null);
                setRightRevealed(false);
            }, 1200);
        } else {
            setTimeout(() => setGameOver(true), 1400);
        }
    };

    const restart = () => {
        if (products) startGame(products);
    };

    if (isLoading) {
        return (
            <div className={styles.LoadingScreen}>
                <div className={styles.Spinner} />
                <p>Ładowanie produktów…</p>
            </div>
        );
    }

    if (isError || !products) {
        return (
            <div className={styles.LoadingScreen}>
                <p className={styles.Error}>Błąd połączenia z API </p>
            </div>
        );
    }

    if (gameOver) {
        return (
            <div className={styles.GameOver}>
                <h2>Koniec gry!</h2>
                <p className={styles.FinalScore}>
                    Twój wynik: <span>{score}</span>
                </p>
                <p className={styles.BestScore}>Rekord: {bestScore} 🏆</p>

                {history.length > 0 && (
                    <div className={styles.History}>
                        <h3>Ostatnie rundy</h3>
                        <ul>
                            {history.slice(0, 5).map((r, i) => (
                                <li key={i} className={r.correct ? styles.Win : styles.Loss}>
                                    <span>{r.left.name}</span>
                                    <span className={styles.Price}>{Number(r.left.price).toFixed(2)} zł</span>
                                    <span className={styles.Vs}>vs</span>
                                    <span>{r.right.name}</span>
                                    <span className={styles.Price}>{Number(r.right.price).toFixed(2)} zł</span>
                                    <span className={styles.ResultIcon}>{r.correct ? '✓' : '✗'}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button className={styles.RestartBtn} onClick={restart}>
                    Zagraj ponownie
                </button>
            </div>
        );
    }

    if (!left || !right) return null;

    return (
        <div className={styles.Wrapper}>
            <div className={styles.ScoreBar}>
                <span>Seria: <strong>{score}</strong></span>
                <span>Rekord: <strong>{bestScore} 🏆</strong></span>
            </div>

            <div className={styles.Arena}>

                <div className={`${styles.Card} ${styles.CardLeft}`}>
                    <span className={styles.Label}>Produkt A</span>
                    <p className={styles.ProductName}>{left.name}</p>
                    <p className={styles.Brand}>{left.brand}</p>
                    <p className={styles.Category}>{left.category}</p>
                    <div className={styles.PriceTag}>
                        {Number(left.price).toFixed(2)} <span>zł</span>
                    </div>
                </div>

                <div className={styles.Center}>
                    <div className={styles.VsCircle}>VS</div>
                    <div className={styles.Buttons}>
                        <button
                            className={`${styles.GuessBtn} ${styles.Higher}`}
                            onClick={() => handleGuess('higher')}
                            disabled={verdict !== null}
                        >
                            ▲ Wyżej
                        </button>
                        <button
                            className={`${styles.GuessBtn} ${styles.Lower}`}
                            onClick={() => handleGuess('lower')}
                            disabled={verdict !== null}
                        >
                            ▼ Niżej
                        </button>
                    </div>

                    {verdict && (
                        <div
                            className={`${styles.VerdictBadge} ${
                                history[0]?.correct ? styles.VerdictOk : styles.VerdictFail
                            }`}
                        >
                            {history[0]?.correct ? '✓ Dobrze!' : '✗ Błąd!'}
                        </div>
                    )}
                </div>

                <div className={`${styles.Card} ${styles.CardRight} ${rightRevealed ? styles.Revealed : ''}`}>
                    <span className={styles.Label}>Produkt B</span>
                    <p className={styles.ProductName}>{right.name}</p>
                    <p className={styles.Brand}>{right.brand}</p>
                    <p className={styles.Category}>{right.category}</p>
                    <div className={styles.PriceTag}>
                        {rightRevealed ? (
                            <>
                                {Number(right.price).toFixed(2)} <span>zł</span>
                            </>
                        ) : (
                            <span className={styles.Hidden}>???</span>
                        )}
                    </div>
                </div>
            </div>

            <p className={styles.Hint}>
                Czy produkt B kosztuje <strong>więcej</strong> czy <strong>mniej</strong> niż produkt A?
            </p>
        </div>
    );
};
