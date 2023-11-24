import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
  <div className={styles.contactContainer}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img style={{height:"1.8rem"}} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:pavanlasure90@email.com">
          Pavanlasure90@email.com
        </a>
      </li>
      <li className={styles.link}>
        <img style={{height:"1.8rem" , marginRight:"5px"}}
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/lasure-pavan-500276226/">
          linkedin.com/Lasurepavan
        </a>
      </li>
      <li style={{marginRight:"1.2rem"}} className={styles.link}>
        <img style={{height:"1.8rem", marginRight:"1px"}}
          src={getImageUrl("contact/githubIcon.png")}
          alt="Github icon"
        />
        <a href="https://github.com/pavanlasure90">
          github.com/LasurePavan
        </a>
      </li>
    </ul>
  </div>
  <form
    method="POST"
    action="https://formspree.io/f/xdoregjo"
    className={styles.form}
  >
    <div className={styles.formContent}>
      <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
        Contact
      </p>
      <p className="text-gray-300 py-4">
        shoot me an email - pavanlasure90@gmail.com
      </p>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        name="email"
      />
      <textarea
        className={styles.input}
        name="message"
        rows="8"
        placeholder="Message"
      ></textarea>
      <button className={styles.submitButton}>Let's Collaborate</button>
    </div>
  </form>
</footer>
  );
};
