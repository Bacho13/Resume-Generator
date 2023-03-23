import React from "react";
import styles from "../../styles/components/ContactSection.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useSelector } from "react-redux";

function ContactSection() {
  const phone = useSelector((state) => state.info.phone);
  const email = useSelector((state) => state.info.email);
  const address = useSelector((state) => state.info.address);

  return (
    <>
      <div className={styles.main}>
        <h1>contact</h1>
        <div className={styles.innerContent}>
          <div className={styles.icon}>
            <LocalPhoneIcon />
          </div>
          <p>{phone}</p>
        </div>
        <div className={styles.innerContent}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <p>{email}</p>
        </div>
        <div className={styles.innerContent}>
          <div className={styles.icon}>
            <FmdGoodIcon />
          </div>
          <p>{address}</p>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
