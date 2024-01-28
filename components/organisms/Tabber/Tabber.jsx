import React, { useState } from "react";
import Image from "next/image";
import styles from "./Tabber.module.scss";
import P from "../../atoms/P/P";
import Title from "../../atoms/Title/Title";
import Tab from "../../molecules/Tab/Tab";
import { dataTab } from "./data";
import Container from "../../atoms/Container/Container";
import { useInView } from 'react-intersection-observer';

const Tabber = ({ imageUrl, title, text, className }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })

  const classAnimPlay = inView && styles['anim-play']
  return (
    <section className={styles.ContainerTabbers} ref={refAnimation}>
      <Container>
      <Title className={styles.titleTabbers} color="black">Acompañamos tu empresa para optimizar sus procesos y potenciar su rendimiento</Title>
        <div className={styles.tabberContainer}>
          <div className={styles.tabberTabsContainer}>
            {dataTab.map((tab, index) => (
              <Tab
                key={index}
                title={tab.title}
                onClick={() => handleTabClick(index)}
                isActive={index === activeTabIndex}
                className={`${index === activeTabIndex && styles.tabActive}`}
              />
            ))}
          </div>
          <div className={styles.tabberTabsText}>
            {dataTab.map((tab, index) => (
              <div
                className={`${styles.text}`}
                key={index}
                style={{ display: index === activeTabIndex ? "block" : "none" }}
              >
                <Tab
                  className={styles.tabComponent}
                  title={tab.title}
                  text={tab.text}
                  imageUrl={`/assets/img/tabs/oficina${tab.id}.jpg`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tabber;
