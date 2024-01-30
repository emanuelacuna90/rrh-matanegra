import React from 'react'
import styles from './SingleCard.module.scss'
import Title from '../../atoms/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { swiperProps } from './data'

const SingleCard = ({ modelo, images, transmicion, gas, traccion }) => {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  })
  const classAnimPlay = inView && styles['anim-play']

  return (
    <section
      className={`${styles['sinlge-card']} ${styles[`anim-fade-in-up`]} ${classAnimPlay}`}
      ref={refAnimation}
    >
      <div className={styles.container}>
        <Title size="md" color="primary" className={styles.title}>
          {modelo}
        </Title>
        {images && (
          <>
            {images?.length > 2 ? (
              <Swiper
                className={styles.swiper}
                {...swiperProps}
                modules={[Autoplay, EffectFade, Pagination]}
              >
                {images?.map((hilux, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles['content-image']}>
                      <Image
                        src={`/assets/img/auto/hilux${hilux.hilux}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className={`${styles.image} ${styles.swiper}`}>
                {images?.map((hilux, index) => {
                  return (
                    <Image
                      key={index}
                      src={`/assets/img/auto/hilux${hilux.hilux}.jpeg`}
                      width={350}
                      height={350}
                      objectFit="cover"
                    />
                  )
                })}
              </div>
            )}
          </>
        )}
        <div className={styles.information}>
          <div> Transmisión: {transmicion}</div>
          <div> Combustible: {gas}</div>
          <div> Tracción: {traccion}</div>
        </div>
      </div>
    </section>
  )
}

export default SingleCard
