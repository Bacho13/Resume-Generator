import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/components/Photo.module.scss";
import fakeImage from "../../public/images/fakeImage.jpg";

function Photo() {
  const photo = useSelector((state) => state.info.photo);
  return (
    <>
      <div className={styles.main}>
        {photo ? (
          <Image
            src={photo}
            width={150}
            height={150}
            alt="Profile Pic"
            className={styles.image}
          />
        ) : (
          <Image
            width={150}
            height={150}
            className={styles.image}
            src={fakeImage}
            alt="Profile Pic"
          />
        )}
      </div>
    </>
  );
}

export default Photo;
