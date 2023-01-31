import styles from './projectImages.module.scss'

import Image from 'next/image'


export default function ProjectImages ({screenshotMobile, screenshotIpad, screenshotDesktop}) {
    return (
        <div className={styles.container}>
            <Image
            src={screenshotMobile}
            alt={"screenshot mobile"}
            className={styles.mobile}
            />
            <Image
            src={screenshotIpad}
            alt={"screenshot ipad"}
            className={styles.ipad}
            />
            <Image
            src={screenshotDesktop}
            alt={"screenshot desktop"}
            className={styles.desktop}
            />
        </div>
    )
}