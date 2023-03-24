import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/components/CPNameEndProf.js.module.scss";
import { addName, addSurname, addProf } from "../../Redux/infoSlice";

function CPNameEndProf() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.main}>
        <p>შეიყვანე მონაცემები</p>
        <input
          type="text"
          placeholder="სახელი"
          onChange={(e) => dispatch(addName(e.target.value))}
          maxLength="15"
        />
        <input
          type="text"
          placeholder="გვარი"
          onChange={(e) => dispatch(addSurname(e.target.value))}
          maxLength="15"
        />
        <input
          type="text"
          placeholder="პროფესია"
          onChange={(e) => dispatch(addProf(e.target.value))}
          maxLength="15"
        />
      </div>
    </>
  );
}

export default CPNameEndProf;
