
import styles from './aboutMeText.module.scss'


export default function AboutMeText () {
    return (
        <p className={styles.about}>
            {`Hello! My name is Stefán and I'm currently a student
            at the Reykjavík Academy of Web Development.
            During my studies I found a deep passion for front end development.
            The combination of logic, technology and creativity is a beautiful thing!
            My other passions in life are exercise, travel, family & friends and
            I love to end my day in one of Reykjavík's swimming pools.`}
        </p>
    )
}