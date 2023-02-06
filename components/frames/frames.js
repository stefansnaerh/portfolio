
import styles from './frames.module.scss'

import Image from 'next/image'

import frameMobileRight from '../../public/frameMobileRight.png'
import frameMobileLeft from '../../public/frameMobileLeft.png'
import frameIpadRight from '../../public/frameIpadRight.svg'
import frameIpadLeft from '../../public/frameIpadLeft.svg'
import frameDesktopRight from '../../public/frameDesktopRight.svg'
import frameDesktopLeft from '../../public/frameDesktopLeft.svg'



export default function Frames () {
    return (
        <div className={styles.container}>
            <Image
                src={frameMobileLeft}
                alt="frame"
                className={styles.mobile}
            />
            <Image
                src={frameMobileRight}
                alt="frame"
                className={styles.mobile}
            />
            <Image
                src={frameIpadLeft}
                alt="frame"
                className={styles.ipad}
            />
            <Image
                src={frameIpadRight}
                alt="frame"
                className={styles.ipad}
            />
            <Image
                src={frameDesktopLeft}
                alt="frame"
                className={styles.desktop}
            />
            <Image
                src={frameDesktopRight}
                alt="frame"
                className={styles.desktop}
            />
        </div>
    )
}