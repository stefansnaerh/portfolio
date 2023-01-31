
import styles from './techBox.module.scss'
import Image from 'next/image'


export default function TechBox ({techLogo, techName, height, width}) {
    return (
        
            <div className={styles.box}>
            <Image
            src={techLogo}
            alt={techName}
            height={height}
            width={width}
            />
            <p className={styles.techName}>{techName.toUpperCase()}</p>
            </div>
    )
}