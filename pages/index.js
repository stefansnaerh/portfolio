import styles from "../styles/Home.module.scss";
// images
import planetsMobile from "../public/projectImages/planetsMobile.jpeg";
import planetsIpad from "../public/projectImages/planetsIpad.jpeg";
import planetsDesktop from "../public/projectImages/planetsDesktop.jpeg";
import kanbanMobile from "../public/projectImages/kanbanMobile.jpeg";
import kanbanIpad from "../public/projectImages/kanbanIpad.jpeg";
import kanbanDesktop from "../public/projectImages/kanbanDesktop.jpeg";
import pmmMobile from "../public/projectImages/pmmMobile.jpeg";
import pmmIpad from "../public/projectImages/pmmIpad.jpeg";
import pmmDesktop from "../public/projectImages/pmmDesktop.jpeg";
import contractorDesktop from "../public/projectImages/contractorDesktop.jpeg";
import contractorMobile from "../public/projectImages/contractorMobile.jpeg";
import contractorIpad from "../public/projectImages/contractorIpad.jpeg";
import bokhaldDesktop from "../public/projectImages/bokhaldDesktop.jpeg";
import bokhaldMobile from "../public/projectImages/bokhaldMobile.jpeg";
import bokhaldIpad from "../public/projectImages/bokhaldIpad.jpeg";

// components
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Frames from "../components/frames/frames";
import MyName from "../components/myName/myName";
import AboutMeContainer from "../components/aboutMeContainer/aboutMeContainer";
import TechContainer from "../components/techContainer/techContainer";
import ProjectsContainer from "../components/projectsContainer/projectsContainer";
import GetInTouch from "../components/getInTouch/getInTouch";

import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Stefán Snær Portfolio</title>
        <meta property="og:title" content="Stefán Snær Portfolio" key="title" />
        <meta
          name="description"
          content="Portfolio for Stefán Snær Heimisson"
        ></meta>
        <meta name="author" content="Stefán Snær"></meta>
      </Head>
      <div ref={homeRef} className={styles.container}>
        <Navbar
          handleScrollHome={handleScrollHome}
          handleScrollAbout={handleScrollAbout}
          handleScrollProjects={handleScrollProjects}
          handleScrollContact={handleScrollContact}
        />
        <Frames />
        <section className={styles.section}>
          <MyName />
          <div ref={aboutRef} className={styles.aboutAndTech}>
            <AboutMeContainer />
            <TechContainer />
          </div>
          <div ref={projectsRef} className={styles.headlineContainer}>
            <h2 className={styles.headline}>{"Some Things I've built"}</h2>
            <div className={styles.line}></div>
          </div>
          <ProjectsContainer
            projectName="Building Contractor website"
            aboutProject="A fully responsive info page made with NextJS, Typescript, Tailwind CSS and Prismic as a headless CMS. Designed and built by me."
            repoLink={"https://github.com/stefansnaerh/Frontend-Kanban"}
            siteLink={"https://contractor-one.vercel.app/"}
            screenshotMobile={contractorMobile}
            screenshotIpad={contractorIpad}
            screenshotDesktop={contractorDesktop}
            containerClass={"container"}
          />
          <div className={styles.linearLine}></div>
          <ProjectsContainer
            projectName="Accounting company info site"
            aboutProject="A fully responsive info page made with NextJS, Typescript . Designed and built by me."
            repoLink={"https://github.com/stefansnaerh/bokhald-1"}
            siteLink={"https://warm-queijadas-8214ec.netlify.app/"}
            screenshotMobile={bokhaldMobile}
            screenshotIpad={bokhaldIpad}
            screenshotDesktop={bokhaldDesktop}
            containerClass={"container2"}
          />
          <div className={styles.linearLine}></div>
          <ProjectsContainer
            projectName="Kanban Task Management"
            aboutProject="A fully responsive full stack website with CRUD functionality. You can add / post / edit / delete boards, tasks and subtasks. Built with React, Sass, NodeJS and Express"
            repoLink={"https://github.com/stefansnaerh/bokhald-1"}
            siteLink={"https://kanban-kappa-seven.vercel.app/"}
            screenshotMobile={kanbanMobile}
            screenshotIpad={kanbanIpad}
            screenshotDesktop={kanbanDesktop}
            containerClass={"container"}
          />
          <div className={styles.linearLine}></div>
          <ProjectsContainer
            projectName="Planets Facts Site"
            aboutProject="A fully responsive web page that displays key info about the planets in our solar system. Built with React, SASS and JSON data"
            repoLink={"https://github.com/stefansnaerh/planets-info-react"}
            siteLink={"https://planets-info-react.vercel.app/"}
            screenshotMobile={planetsMobile}
            screenshotIpad={planetsIpad}
            screenshotDesktop={planetsDesktop}
            containerClass={"container2"}
          />
          <div className={styles.linearLine}></div>
          <ProjectsContainer
            projectName="PMM - Pick My Movie"
            aboutProject="A movie website where you can get a random movie to watch and see top rated movies and tv shows. Built with vanilla Javascript and SASS. All data fetched from themoviedb API"
            repoLink={"https://github.com/stefansnaerh/pick-my-movie"}
            siteLink={"https://pick-my-movie.vercel.app/"}
            screenshotMobile={pmmMobile}
            screenshotIpad={pmmIpad}
            screenshotDesktop={pmmDesktop}
            containerClass={"container"}
          />
          <GetInTouch contactRef={contactRef} />
          <footer className={styles.footer}>
            <p className={styles.footerText}>Designed & built by Stefán Snær</p>
          </footer>
        </section>
      </div>
    </>
  );
}
