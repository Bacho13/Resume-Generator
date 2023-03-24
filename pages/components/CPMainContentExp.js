import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/components/CPMainContentExp.module.scss";
import { addExp, deletExp } from "../../Redux/infoSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

function CPMainContentExp() {
  const dispatch = useDispatch();
  const [expInfo, setExpInfo] = useState({
    id: nanoid(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    about: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();

    setExpInfo((prev) => ({ ...prev, id: id }));
    dispatch(addExp(expInfo));
    setExpInfo({
      id: nanoid(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      about: "",
    });
  };

  const del = () => {
    dispatch(deletExp());
  };

  return (
    <>
      <div className={styles.main}>
        <p>გამოცდილების სექცია</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.skill}>
            <input
              value={expInfo.company}
              type="text"
              maxLength={20}
              placeholder="კომპანიის სახელი"
              name="company"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={expInfo.position}
              name="position"
              placeholder="პოზიცია"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={expInfo.startDate}
              name="startDate"
              placeholder="მუშაობის დაწყების თარიღი"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={expInfo.endDate}
              name="endDate"
              placeholder="კომპანიის დატოვების თარიღი"
              onChange={handleInputChange}
            />
            <textarea
              maxLength={90}
              value={expInfo.about}
              name="about"
              placeholder="მოკლედ თუ რას აკეთებდით მ პოზიციაზე (მაქსიმუმ 90 ასო)"
              onChange={handleInputChange}
            />
            <div className={styles.buttons}>
              <button type="submit">დამატება</button>
              <button type="button" onClick={del}>
                წაშალა
              </button>
            </div>
          </div>
          {/* {skills.map((item, index) => (
            <div key={index}>
              <input type="text" value={item.skill} readOnly />
              <input type="text" value={item.level} readOnly />
              <button
                type="button"
                onClick={() => {
                  dispatch(deletSkill(item.id));
                }}
              >
                წაშლა
              </button>
            </div>
          ))} */}
        </form>
      </div>
    </>
  );
}

export default CPMainContentExp;
