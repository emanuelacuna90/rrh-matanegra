import React from 'react'
import ServiceItem from '../../molecules/ServiceItem/ServiceItem'
import styles from './ServiceItemGrid.module.scss'
import { dataItem } from './data'
import Container from '../../atoms/Container/Container'
import Title from '../../atoms/Title/Title'
import { useInView } from 'react-intersection-observer'

const ServiceItemGrid = () => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })

  const classAnimPlay = inView && styles['anim-play']

  return (
    <section className={styles.service} ref={refAnimation} id="servicio">
      <Container>
        <Title color="white" className={styles.title}>

Con una sólida trayectoria en el campo del management y la gestión de talento, canalizamos nuestro equipo altamente calificado para ofrecer servicios de calidad a las empresas.
        </Title>
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
