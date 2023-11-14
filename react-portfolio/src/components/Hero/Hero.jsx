import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lasure Pavan</h1>
        <p className={styles.description}>
          I'm a Certified full-stack developer with hands on experience in
          UI/UX design. Capable in instant web technologies including
          HTML , CSS, JavaScript , React, Node.js, Express, MongoDB
          and API integration, Skilled in dynamic web applications.
        </p>
        <a className={styles.contactBtn} href="react-portfolio/resume/Lasure Pavan -Full Stack Developer Resume.pdf" download>Download Resume</a>
      </div>
      <img
        src={getImageUrl("hero/my picture.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};





