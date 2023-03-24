import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/components/CPAbout.module.scss";
import { addAbout } from "../../Redux/infoSlice";
function CPAbout() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.main}>
        <h1>ჩაწერე შენ შესახებ მოკლედ ინფორმაცია (მაქსიმუმ 600 ასო)</h1>
        <textarea
          type="text"
          className={styles.textarea}
          rows="10"
          cols="60"
          onChange={(e) => dispatch(addAbout(e.target.value))}
          maxLength="600"
        />
      </div>
    </>
  );
}

export default CPAbout;
