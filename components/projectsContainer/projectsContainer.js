
import ProjectLinks from '../projectLinks/projectLinks'
import ProjectAbout from '../projectAbout/projectAbout'
import styles from './projectsContainer.module.scss'
import ProjectImages from '../projectImages/projectImages'


export default function ProjectsContainer ({projectName, aboutProject, repoLink, siteLink, screenshotMobile, screenshotIpad, screenshotDesktop, containerClass}) {
    return (
        <div className={styles[containerClass]}>
            <div className={styles.aboutLinksContainer}>
                <ProjectAbout
                projectName={projectName}
                aboutProject={aboutProject}
                />
                <div className={styles.linksContainer}>
                <ProjectLinks
                repoLink={repoLink}
                siteLink={siteLink}
                />
                </div>
            </div>
            <div className={styles.imagesContainer}>
                <ProjectImages
                screenshotMobile={screenshotMobile}
                screenshotIpad={screenshotIpad}
                screenshotDesktop={screenshotDesktop}
                />
            </div>
        </div>
    )
}

/* <ProjectAbout
                projectName={"Pick My Movie"}
                aboutProject={"Movie and tv show site where you can see the most popular and top rated movies. You can also get a random movie with over 7 in user ratings if you have trouble picking your movie. Built with Javascript and SASS. Information gotten from TMDB API."}
                />*/