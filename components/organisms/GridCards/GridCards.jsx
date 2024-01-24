import styles from './GridCards.module.scss'
import Card from '../../molecules/Card/Card'
import { cards } from '../../../data/dataVehicles'
import Title from '../../atoms/Title/Title'
import Container from '../../atoms/Container/Container'
import { useInView } from 'react-intersection-observer'

const GridCards = () => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })
  const classAnimPlay = inView && styles['anim-play']
  return (
    <section className={styles['grid-cards']} ref={refAnimation} id="flota">
      <Container className={styles.container}>
        <Title color="primary">Nuestra flota de vehículos</Title>
        <div className={styles['content-cards']}>
          {cards.map((card, index) => {
            const classAnimDelay = styles[`anim-delay-${+index + 1}`]
            return (
              <Card
                className={`${styles['anim-fade-in-up']} ${classAnimDelay} ${classAnimPlay}`}
                key={index}
                {...card}
                imageUrl={`/assets/img/cards/card${card.id}.jpg`}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default GridCards
