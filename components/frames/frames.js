
import styles from './frames.module.scss'

import Image from 'next/image'

import frameMobileRight from '../../public/frameMobileRight.png'
import frameMobileLeft from '../../public/frameMobileLeft.png'


export default function Frames () {
    return (
        <div className={styles.container}>
            <Image
                src={frameMobileLeft}
                alt="frame"
            />
            <Image
                src={frameMobileRight}
                alt="frame"
            />
        </div>
    )
}