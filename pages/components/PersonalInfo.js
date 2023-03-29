import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/PersonalInfo.module.scss";

function PersonalInfo() {
  const bDay = useSelector((state) => state.info.bDay);
  const nationality = useSelector((state) => state.info.nationality);
  const langs = useSelector((state) => state.info.langs);
  return (
    <>
      <div className={styles.main}>
        <h1>პერსონალური ინფორმაცია</h1>
        <div className={styles.innerContent}>
          <p>დაბადების თარიღი : </p>

          <p> {bDay}</p>
        </div>
        <div className={styles.innerContent}>
          <p>მოქალაქეობა :</p>
          <p>{nationality}</p>
        </div>
        <div className={styles.innerContent}>
          <p>ენები: </p>

          <p>{langs}</p>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
