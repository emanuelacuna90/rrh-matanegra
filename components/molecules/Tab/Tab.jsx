import React from "react";
import Image from "next/image";
import styles from "./Tab.module.scss";
import P from "../../atoms/P/P";
import Title from "../../atoms/Title/Title";

const Tab = ({ imageUrl, title, text, className, onClick }) => {
  return (
    <div className={`${styles.tabContent} ${className}`} onClick={onClick}>
      {title && (
        <div className={`${styles.tabTitle}`}>
          <h3>{title}</h3>
        </div>
      )}
      {text && (
        <div className={styles.containerText}>
          {text && (
            <div
              className={`${styles.tabText}`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          {imageUrl && (
            <div className={styles.imageContainer}>
              <Image src={imageUrl} layout="fill" objectFit="cover" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tab;
