import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/components/CPPersonalInfo.module.scss";
import { addBDay, addNationality, addLangs } from "../Redux/infoSlice";
function CPPersonalInfo() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.main}>
        <p>პერსონალური ინფორმაცია</p>
        <input
          type="text"
          placeholder="დაბადების თარიღი"
          onChange={(e) => dispatch(addBDay(e.target.value))}
          maxlength="15"
        />
        <input
          type="text"
          placeholder="მოქალაქეობა"
          onChange={(e) => dispatch(addNationality(e.target.value))}
          maxlength="30"
        />
        <input
          type="text"
          placeholder="ენები"
          onChange={(e) => dispatch(addLangs(e.target.value))}
          maxlength="60"
        />
      </div>
    </>
  );
}

export default CPPersonalInfo;
