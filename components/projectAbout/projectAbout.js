import styles from './projectAbout.module.scss'



export default function ProjectAbout ({projectName, aboutProject}) {
    return (
        <div className={styles.container}>
        <h3 className={styles.headline}>{projectName}</h3>
        <div className={styles.line}></div>
        <p className={styles.text}>{aboutProject}</p>
        </div>
    )
}