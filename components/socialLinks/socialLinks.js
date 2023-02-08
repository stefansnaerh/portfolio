
import styles from './socialLinks.module.scss'

import Image from 'next/image'

import instaIcon from '../../public/icons/insta.svg'
import linkedInIcon from '../../public/icons/linkedin.svg'
import githubIcon from '../../public/icons/github.svg'



export default function SocialLinks () {
    return (
        <div className={styles.container}>
         
            <a href='https://www.linkedin.com/in/stef%C3%A1n-heimisson-83856a22a/'>
                <Image
                src={linkedInIcon}
                alt="linked profile"
            />
            </a>
            <a href='https://github.com/stefansnaerh'>
                <Image
                src={githubIcon}
                alt="github profile"
            />
            </a>
        </div>
    )
}