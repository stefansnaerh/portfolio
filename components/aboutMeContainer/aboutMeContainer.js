
import styles from './aboutMeContainer.module.scss'
import AboutMeText from "../aboutMeText/aboutMeText";
import Image from 'next/image';

import headshotMobile from '../../public/portfolioPhotoMobile.jpeg'


export default function AboutMeContainer () {
    return (
        <div className={styles.container}>
            <div className={styles.headlineContainer}>
            <h2 className={styles.aboutMe}>About Me</h2>
            <div className={styles.line}></div>
            </div>
            <Image
            src={headshotMobile}
            alt="photo of Stefán"
            width={200}
            height={200}
            className={styles.headshotMobile}
            />
            <AboutMeText/>
        </div>
    )
}