import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar/navbar'
import Frames from '../components/frames/frames'
import MyName from '../components/myName/myName'
import AboutMeContainer from '../components/aboutMeContainer/aboutMeContainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Frames/>
      <section className={styles.section}>
      <MyName/>
      <AboutMeContainer/>
      </section>
    </div>
  )
}
