import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/NameAndeProf.module.scss";

function NameAndeProf() {
  const info = useSelector((state) => state.info);
  return (
    <>
      <div className={styles.NameCont}>
        <h1 className={styles.name}>{info.name}</h1>
        <h1 className={styles.surname}>{info.surname}</h1>
        <h3 className={styles.prof}>{info.prof}</h3>
      </div>
    </>
  );
}

export default NameAndeProf;
