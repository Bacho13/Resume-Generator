import React from "react";
import styles from "../../styles/components/Cv.module.scss";
import NameAndeProf from "./NameAndeProf";
import About from "./About";
import Photo from "./Photo";
import ContactSection from "./ContactSection";
import PersonalInfo from "./PersonalInfo";

function cv() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <Photo />
            <ContactSection />
            <PersonalInfo />
          </div>
          <div className={styles.rightSide}>
            <NameAndeProf />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default cv;
