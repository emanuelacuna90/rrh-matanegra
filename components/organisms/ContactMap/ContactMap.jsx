import 'antd/dist/antd.css'
import styles from './ContactMap.module.scss'
import Container from '../../atoms/Container/Container'
import Heading from '../../molecules/Heading/Heading'
import { useInView } from 'react-intersection-observer'
import Map from '../../molecules/Map'
import InfoContact from '../../molecules/InfoContact/InfoContact'

const ContactMap = ({ title, copy }) => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })

  const classAnimPlay = inView && styles['anim-play']

  return (
    <section className={styles.contact} ref={refAnimation}>
      <Container
        className={`${styles.container} ${styles[`anim-delay-1`]} ${
          styles['anim-fade-in-up']
        } ${classAnimPlay}`}
      >
        <Heading className={styles.heading} title={title} description={copy} alignment="center" />
      </Container>

      <InfoContact
        className={`${styles.infoContact} ${styles[`anim-delay-2`]} ${
          styles['anim-fade-in-up']
        } ${classAnimPlay}`}
      />

      <Map />
    </section>
  )
}

export default ContactMap
