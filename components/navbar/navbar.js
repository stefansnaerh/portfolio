
import styles from './navbar.module.scss'
import SocialLinks from '../socialLinks/socialLinks'


export default function Navbar ({handleScrollHome, handleScrollAbout, handleScrollProjects, handleScrollContact}) {


    return (
        <header className={styles.header}>
            <div className={styles.socialLinks}>
            <SocialLinks/>
            </div>
            <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <li onClick={handleScrollHome} className={styles.li}>
                   Home
                </li>
                <li onClick={handleScrollAbout} className={styles.li}>
                   About
                </li>
                <li onClick={handleScrollProjects} className={styles.li}>
                    Projects
                </li>
                <li onClick={handleScrollContact} className={styles.li}>
                    Contact
                </li>
            </ul>
            </nav>
        </header>
    )
}