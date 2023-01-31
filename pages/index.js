import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar/navbar'
import Frames from '../components/frames/frames'
import MyName from '../components/myName/myName'
import AboutMeContainer from '../components/aboutMeContainer/aboutMeContainer'
import TechContainer from '../components/techContainer/techContainer'
import ProjectsContainer from '../components/projectsContainer/projectsContainer'
import GetInTouch from '../components/getInTouch/getInTouch'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Frames/>
      <section className={styles.section}>
      <MyName/>
      <div className={styles.aboutAndTech}>
      <AboutMeContainer/>
      <TechContainer/>
      </div>
      <ProjectsContainer/>
      <GetInTouch/>
      </section>
    </div>
  )
}
