import 'antd/dist/antd.css'
import styles from './Contact.module.scss'
import Container from '../../atoms/Container/Container'
import FormEmail from '../../molecules/FormEmail/FormEmail'
import Heading from '../../molecules/Heading/Heading'
import { useInView } from 'react-intersection-observer'

export const Contact = ({ title, copy, templateId, layout }) => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })

  const classAnimPlay = inView && styles['anim-play']

  const emailJsServiceId = 'service_gulzkvm'
  const emailJsContactTemplateId = 'template_s8kgr86'

  return (
    <section className={styles.contact} ref={refAnimation} id="contact">
      <Container
        className={`${styles.container} ${styles[`anim-delay-1`]} ${
          styles['anim-fade-in-up']
        } ${classAnimPlay}`}
      >
        <Heading className={styles.heading} title={title} description={copy} alignment="center" />
        <FormEmail
          layout={layout}
          serviceId={emailJsServiceId}
          templateId={emailJsContactTemplateId}
        />
      </Container>
    </section>
  )
}

export default Contact
