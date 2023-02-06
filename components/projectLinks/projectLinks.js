import styles from './projectLinks.module.scss'


export default function ProjectLinks ({repoLink, siteLink}) {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <a className={styles.linkRepo} href={repoLink}>
                    <p className={styles.text}>Github Repository</p>
                </a>
            </div>
        <div className={styles.line}>
            <a className={styles.linkSite} href={siteLink}>
                <p className={styles.text}>Live site</p>
            </a>
        </div>
        </div>
    )
}