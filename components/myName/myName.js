import styles from './myName.module.scss'



export default function MyName () {

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>
            Hi, my name is <br/>
            Stefán Snær <br/>
            Heimisson,
            </h1>
            <p className={styles.aspiring}>aspiring</p>
            <h1 className={styles.name}>
            web 
            developer
            </h1>
        </div>
    )
}