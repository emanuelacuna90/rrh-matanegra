import React, { useState } from "react";
import styles from "./Accordions.module.scss";
import { dataTab } from "./data";
import Container from "../../atoms/Container/Container";
import Accordion from "../../molecules/Accordion/Accordion";
import Title from "../../atoms/Title/Title";
import { useInView } from 'react-intersection-observer'

const Accordions = ({ title, text, className }) => {
    const { ref: refAnimation, inView } = useInView({
        threshold: 0,
      })
    
      const classAnimPlay = inView && styles['anim-play']

  return (
   <section className={styles.accordionsComponent} ref={refAnimation}>
     <Container className={styles.accordionContainer}>
     <Title size='sm' className={styles.titleTabbers} color="black">Acompañamos tu empresa para optimizar sus procesos y potenciar su rendimiento</Title>
       {dataTab.map((item, index)=>{
       return  (<Accordion key={index} title={item.title} text={item.text}/>)
       })}
    </Container>
   </section>
  );
};

export default Accordions;
