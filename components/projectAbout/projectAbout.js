import styles from './projectAbout.module.scss'



export default function ProjectAbout ({projectName, aboutProject}) {
    return (
        <div className={styles.container}>
        <div className={styles.line}>
        <h3 className={styles.headline}>{projectName}</h3>
        </div>
        <p className={styles.text}>{aboutProject}</p>
        </div>
    )
}