import React from 'react'
import ServiceItem from '../../molecules/ServiceItem/ServiceItem'
import styles from './ServiceItemGrid.module.scss'
import { dataItem } from './data'
import Container from '../../atoms/Container/Container'
import Title from '../../atoms/Title/Title'
import { useInView } from 'react-intersection-observer'
import P from '../../atoms/P/P'

const ServiceItemGrid = () => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })

  const classAnimPlay = inView && styles['anim-play']

  return (
    <section className={styles.service} ref={refAnimation} id="servicio">
      <Container>
        <div className={styles.containerTitle}>
          <Title size="xl" color="black" className={styles.title}>
          Con una <strong>sólida trayectoria</strong> en el campo del management y 
          la gestión de talento.
          </Title>
          <P size='m' color="black">Canalizamos nuestro equipo altamente calificado 
          para ofrecer servicios de calidad a las empresas.</P>
        </div>
        <div className={styles.gridItems}>
          {dataItem.map((card, index) => {
            const classAnimDelay = styles[`anim-delay-${+index + 1}`]
            return (
              <ServiceItem
                className={`${styles['anim-fade-in-up']} ${classAnimDelay} ${classAnimPlay}`}
                key={index}
                {...card}
                imageUrl={`/assets/img/services${card.id}.png`}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServiceItemGrid
