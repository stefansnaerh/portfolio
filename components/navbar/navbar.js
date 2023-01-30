
import styles from './navbar.module.scss'
import Link from 'next/link'


export default function Navbar () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
                <li>
                    <Link href='/'>Projects</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}