import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/components/CPMainContentEdu.module.scss";
import { addEdu, deletEdu } from "../../Redux/infoSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

function CPMainContentEdu() {
  const dispatch = useDispatch();
  const [eduInfo, setEduInfo] = useState({
    id: nanoid(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    about: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEduInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();

    setEduInfo((prev) => ({ ...prev, id: id }));
    dispatch(addEdu(eduInfo));
    setEduInfo({
      id: nanoid(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      about: "",
    });
  };

  const del = () => {
    dispatch(deletEdu());
  };

  return (
    <>
      <div className={styles.main}>
        <p>განათლების სექცია</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.skill}>
            <input
              value={eduInfo.company}
              type="text"
              maxLength={20}
              placeholder="სასწავლებლის სახელი"
              name="company"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={eduInfo.position}
              name="position"
              placeholder="სფერო"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={eduInfo.startDate}
              name="startDate"
              placeholder="სწავლის დაწყების თარიღი"
              onChange={handleInputChange}
            />
            <input
              maxLength={20}
              value={eduInfo.endDate}
              name="endDate"
              placeholder="სწავლის დასრულების თარიღი"
              onChange={handleInputChange}
            />
            <textarea
              maxLength={90}
              value={eduInfo.about}
              name="about"
              placeholder="მოკლედ თუ რას ისწავლეთ (მაქსიმუმ 90 ასო)"
              onChange={handleInputChange}
            />
            <div className={styles.buttons}>
              <button type="submit">დამატება</button>
              <button type="button" onClick={del}>
                წაშალა
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CPMainContentEdu;
