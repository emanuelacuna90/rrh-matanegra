import React, { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, text, className, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div
        className={`${styles.accordion} ${isOpen ? styles.rotatePlus : ''}`}
        onClick={() => handleClick()}
        
      >
       <div className={styles.titleContainer}>
          <h3 className={styles.titleAccordion}>{title}</h3>
          <span className={styles.plusIcon}></span>
       </div>
        <div className={`${styles.accordionText} ${isOpen ? styles.accordionOpen : styles.accordionClose}`}>
          <div
            className={`${styles.accordionInfo}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    );
  };

export default Accordion;

