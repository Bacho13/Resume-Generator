import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "../../styles/components/Cv.module.scss";
import NameAndeProf from "./NameAndeProf";
import About from "./About";
import Photo from "./Photo";
import ContactSection from "./ContactSection";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import MainContent from "./MainContent";
import { useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";

function cv() {
  const exp = useSelector((state) => state.info.exps);
  const edu = useSelector((state) => state.info.edus);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.cvContent}>
          <div className={styles.content} ref={componentRef}>
            <div className={styles.leftSide}>
              <Photo />
              <ContactSection />
              <PersonalInfo />
              <Skills />
            </div>
            <div className={styles.rightSide}>
              <NameAndeProf />
              <About />
              <MainContent eduOrExpo={exp} />
              <MainContent eduOrExpo={edu} />
            </div>
          </div>
        </div>

        <button className={styles.printBtn} onClick={handlePrint}>
          გადმოწერე რეზიუმე
        </button>
        <AdminPanel />
      </div>
    </>
  );
}

export default cv;
