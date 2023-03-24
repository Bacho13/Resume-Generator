import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/MainContent.module.scss";

function MainContent({ eduOrExpo, header }) {
  const section = eduOrExpo;
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>{header}</p>
          <div className={styles.dotDecor}></div>
        </div>

        {eduOrExpo &&
          eduOrExpo.map((item) => (
            <div className={styles.innerContent} key={item.id}>
              <div className={styles.leftSide}>
                <p className={styles.position}>{item.position}</p>
                <p
                  className={styles.dates}
                >{`${item.startDate} - ${item.endDate}`}</p>
              </div>
              <div className={styles.rightSide}>
                <p className={styles.companyName}>{item.company}</p>
                <p className={styles.urJob}>{item.about}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MainContent;
