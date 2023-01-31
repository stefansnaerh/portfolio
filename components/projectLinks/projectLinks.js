import styles from './projectLinks.module.scss'


export default function ProjectLinks ({repoLink, siteLink}) {
    return (
        <div className={styles.container}>
        <a className={styles.link} href={repoLink}>
        <p className={styles.text}>Github Repository</p>
        <div className={styles.lineGithub}></div>
        </a>
        <a className={styles.link} href={siteLink}>
        <p className={styles.text}>Live site</p>
        <div className={styles.lineLiveSite}></div>
        </a>
        </div>
    )
}