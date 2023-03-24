import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../styles/components/CPContactSection.module.scss";
import { addPhone, addEmail, addAddress } from "../../Redux/infoSlice";

function CPContactSection() {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.main}>
        <p>შეიყვანე საკონტაქტო</p>
        <input
          type="text"
          placeholder="მობილურის ნომერი"
          onChange={(e) => dispatch(addPhone(e.target.value))}
          maxLength="15"
        />
        <input
          type="text"
          placeholder="მაილი"
          onChange={(e) => dispatch(addEmail(e.target.value))}
          maxLength="30"
        />
        <input
          type="text"
          placeholder="მისამართი"
          onChange={(e) => dispatch(addAddress(e.target.value))}
          maxLength="60"
        />
      </div>
    </>
  );
}

export default CPContactSection;
