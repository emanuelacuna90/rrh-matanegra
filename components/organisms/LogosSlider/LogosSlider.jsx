import styles from './LogosSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { slides, swiperProps } from './data'
import Logos from '../../molecules/Logos/Logos'
import Title from '../../atoms/Title/Title'
import Container from '../../atoms/Container/Container'

const LogosSlider = () => {
  return (
    <section className={styles.logoSliderContent} id="empresas">
       <Container>
        <Title className={styles.title} size="xl" color="black">Empresas que <strong>confian en nuestro proceso</strong></Title>
        <Swiper {...swiperProps} modules={[Autoplay, EffectFade, Navigation]}>
            {slides.map(({ id, text }) => (
            <SwiperSlide key={id}>
                <Logos imageUrl={`/assets/brands/logo${id}.png`} />
            </SwiperSlide>
            ))}
        </Swiper>
       </Container>
    </section>
  )
}

export default LogosSlider