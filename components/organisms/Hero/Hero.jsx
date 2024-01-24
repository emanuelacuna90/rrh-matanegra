import styles from './Hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { slides, swiperProps } from './data'
import HeroItem from '../../molecules/HeroItem/HeroItem'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroItem/>
    </section>
  )
}

export default Hero
