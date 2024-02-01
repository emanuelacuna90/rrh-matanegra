import React from "react";
import Image from "next/image";
import styles from "./ServiceItem.module.scss";
import P from "../../atoms/P/P";
import Title from "../../atoms/Title/Title";

const ServiceItem = ({ imageUrl, title, text, className }) => {
  return (
    <div className={`${styles.serviceItem} ${className}`}>
      <div className={`${styles.cardFront}`}>
        <Image
          src={imageUrl}
          alt="Icon Card"
          objectFit="contain"
          width="70"
          height='70'
        />
        <Title color="white" className={`${styles.title}`}>
          {title}
        </Title>
      </div>
      <div className={`${styles.cardBack}`}>
        <P>{text}</P>
      </div>
    </div>
  );
};

export default ServiceItem;
