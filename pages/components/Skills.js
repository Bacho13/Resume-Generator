import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/Skills.module.scss";

function Skills() {
  const skills = useSelector((state) => state.info.skills);

  return (
    <>
      <div className={styles.main}>
        <h1>სკილები</h1>
        <div className={styles.innerContent}>
          {skills.map((item) => (
            <div key={item.id}>
              <div className={styles.levelCont}>
                <dl>
                  <dt
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    style={{ color: "white" }}
                  >
                    {item.skill}
                  </dt>
                  <dd className="flex items-center mb-3">
                    <div
                      style={{ backgroundColor: "gray" }}
                      className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2"
                    >
                      <div
                        style={{
                          width: `${item.level}%`,
                          backgroundColor: "#fff",
                        }}
                        className=" h-2.5 rounded "
                      ></div>
                    </div>
                    <span
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                      style={{ color: "white" }}
                    >
                      {item.level / 10}
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
