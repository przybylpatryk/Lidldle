import styles from './Header.module.scss';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className={styles.Header}>
            <h1>Lidldle</h1>
            <nav>
                <ul>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/classic">Klasyczny</Link></li>
                    <li><Link to="/image">Obrazek</Link></li>
                    <li><Link to="/higherlower">Wyżej Niżej</Link></li>
                    <li><Link to="/infinite">Nieskończony</Link></li>
                </ul>
            </nav>
        </div>
    )
}