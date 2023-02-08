
import styles from './techContainer.module.scss'
import TechBox from '../techBox/techBox'

// icons
import jsIcon from '../../public/icons/jsIcon.svg'
import reactIcon from '../../public/icons/reactIcon.svg'
import sassIcon from '../../public/icons/sassIcon.svg'
import htmlIcon from '../../public/icons/htmlIcon.svg'
import gitIcon from '../../public/icons/gitIcon.svg'
import cssIcon from '../../public/icons/cssIcon.svg'

import tsIcon from '../../public/icons/tsIcon.svg'
import nextJsIcon from '../../public/icons/nextjsIcon.svg'



export default function ComfortableTech () {
    return (
        <div className={styles.container}>
        <p className={styles.text}>{"Technologies I'm comfortable with:"}</p>
        <div className={styles.techContainer}>
        <TechBox
        techLogo={jsIcon}
        techName = "Javascript"
        />
        <TechBox
        techLogo={reactIcon}
        techName = "React"
        />
        <TechBox
        techLogo={sassIcon}
        techName = "sass"
        />
        <TechBox
        techLogo={htmlIcon}
        techName = "html"
        />
        <TechBox
        techLogo={gitIcon}
        techName = "git"
        />
        <TechBox
        techLogo={cssIcon}
        techName = "css"
        />
        </div>
        <p className={styles.text}>{"Technologies I'm currently familiarizing myself with: "}</p>
        <div className={styles.techContainer}>
        <TechBox
        techLogo={nextJsIcon}
        techName = "next js"
        />
        <TechBox
        techLogo={tsIcon}
        techName = "typescript"
        />
        </div>
        </div>
    )
}