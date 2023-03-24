import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/AdminPanel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../Redux/infoSlice";
import CPNameEndProf from "./CPNameEndProf";
import CPAbout from "./CPAbout";
import CPContactSection from "./CPContactSection.js";
import CPPersonalInfo from "./CPPersonalInfo";
import CPSkills from "./CPSkills";
import CPMainContentExp from "./CPMainContentExp";
import CPMainContentEdu from "./CPMainContentEdu";

const AdminPanel = () => {
  const [photo, setPhoto] = useState(null);
  const [uploaded, setuploaded] = useState(null);
  const Photo = useSelector((state) => state.info.photo);

  const dispatch = useDispatch();

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
    setuploaded(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("photo", base64String);
      setPhoto(base64String);
      dispatch(addPhoto(base64String));
    };
    setuploaded(true);
  };

  return (
    <div className={styles.adminPanel}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handlePhotoChange}
          className={styles.customInput}
        />
        <button
          className={styles.uploadButton}
          type="submit"
          disabled={!photo || uploaded}
        >
          ატვირთე
        </button>
      </form>
      <CPNameEndProf />
      <CPAbout />
      <CPContactSection />
      <CPPersonalInfo />
      <CPSkills />
      <CPMainContentExp />
      <CPMainContentEdu />
    </div>
  );
};

export default AdminPanel;
