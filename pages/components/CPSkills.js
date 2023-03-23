import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/components/CPSkills.module.scss";
import { addSkills, deletSkill } from "../Redux/infoSlice";

function CPSkills() {
  // const [skillVal, setSkillVal] = useState("");
  // const [levelVal, setLevelVal] = useState();
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.info.skills);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    const newSkill = { id: skill, skill: skill, level: level };
    dispatch(addSkills(newSkill));
    setSkill("");
    setLevel("");
  };

  return (
    <>
      <div className={styles.main}>
        <form onSubmit={addSkill}>
          <h1 className="text-3xl font-bold underline">tailwind</h1>
          <div className={styles.skill}>
            <input
              value={skill}
              type="text"
              className=""
              placeholder="ჩაწერე რა უნარს ფლობ"
              onChange={(e) => {
                setSkill(e.target.value);
              }}
            />
            <input
              value={level}
              type="number"
              min="0"
              max="100"
              style={{ width: "150px" }}
              placeholder="100დან რამდენ ქულაზე ფლობ ამ უნარს"
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            />
            <button type="submit">ახალი ველის დამატება</button>
          </div>
          {skills.map((item, index) => (
            <div key={index}>
              <input type="text" value={item.skill} />
              <input type="text" value={item.level} />
              <button
                type="button"
                onClick={() => {
                  dispatch(deletSkill(item.id));
                }}
              >
                წაშლა
              </button>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}

export default CPSkills;
