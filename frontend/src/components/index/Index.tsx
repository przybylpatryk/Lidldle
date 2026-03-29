import styles from './Index.module.scss';
import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <main className={styles.Main}>
            <div className={styles.Btn}>
                <Link to="/classic">Klasyczny</Link>
            </div>
            <div className={styles.Btn}>
                <Link to="/image">Obrazek</Link>
            </div>
            <div className={styles.Btn}>
                <Link to="/higherlower">Wyżej Niżej</Link>
            </div>
            <div className={styles.Btn}>
                <Link to="/infinite">Nieskończony</Link>
            </div>
        </main>
        )
}