import styles from './Index.module.scss';
import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <main className={styles.Main}>
            <Link className={styles.Btn} to="/classic">Klasyczny</Link>

            <Link className={styles.Btn} to="/image">Obrazek</Link>

            <Link className={styles.Btn} to="/higherlower">Wyżej Niżej</Link>

            <Link className={styles.Btn} to="/infinite">Nieskończony</Link>
        </main>
        )
}