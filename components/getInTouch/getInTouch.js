
import styles from './getInTouch.module.scss'

import SocialLinks from '../socialLinks/socialLinks'

export default function GetInTouch () {
    return (
        <div className={styles.container}>
            <div className={styles.headlineContainer}>
            <h2 className={styles.getInTouch}>{"Get In Touch"}</h2>
            <div className={styles.line}></div>
            </div>
            <p className={styles.text}>{"My inbox is always open.  Hit me up, even if it’s just to say hello!"}</p>
            <address>
                <a className={styles.emailLink} href='mailto:stefansnaerh@gmail.com'>Say Hello</a>
                <div className={styles.redLine}></div>
            </address>
            <SocialLinks/>
        </div>
    )
}