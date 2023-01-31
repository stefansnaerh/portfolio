
import ProjectLinks from '../projectLinks/projectLinks'
import ProjectAbout from '../projectAbout/projectAbout'
import styles from './projectsContainer.module.scss'
import ProjectImages from '../projectImages/projectImages'

import planetsMobile from '../../public/planetsMobile.jpeg'
import planetsIpad from '../../public/planetsIpad.jpeg'
import planetsDesktop from '../../public/planetsDesktop.jpeg'



export default function ProjectsContainer () {
    return (
        <div className={styles.container}>
            <div className={styles.headlineContainer}>
            <h2 className={styles.aboutMe}>{"Some Things I've built"}</h2>
            <div className={styles.line}></div>
            </div>
            <ProjectAbout
            projectName="Planets facts site"
            aboutProject="A fully responsive web page that displays key info about the planets in our solar system. Built with React, SASS and JSON data"
            />
            <ProjectLinks
            repoLink={"https://github.com/stefansnaerh/planets-info-react"}
            siteLink={"https://planets-info-react.vercel.app/"}
            />
            <ProjectImages
            screenshotMobile={planetsMobile}
            screenshotIpad={planetsIpad}
            screenshotDesktop={planetsDesktop}
            />
        </div>
    )
}