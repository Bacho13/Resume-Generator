import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/components/About.module.scss";
import { addAbout } from "../../Redux/infoSlice";
function About() {
  const about = useSelector((state) => state.info.about);
  return (
    <>
      <div className={styles.main}>
        <h1>ABOUT</h1>
        <p>{about}</p>
      </div>
    </>
  );
}

export default About;
