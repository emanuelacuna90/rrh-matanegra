import React from 'react'
import Image from 'next/image'
import styles from './Card.module.scss'
import Link from 'next/link'
import { dataCard } from './cardsampledata'
import Button from '../../atoms/Button/Button'

function Card({ imageUrl, slug, modelo, transmicion, gas, traccion, className }) {
  const icons = {
    transmicion: {
      src: '/assets/img/icons/transmision.png',
      alt: 'Icon',
    },
    gas: {
      src: '/assets/img/icons/fuel-station.png',
      alt: 'Icon',
    },
    traccion: {
      src: '/assets/img/icons/traccion.png',
      alt: 'Icon',
    },
  }

  return (
    <Link href={`/vehicles/${slug}`}>
      <a className={`${styles.card} ${className}`}>
        <div className={styles.cardImage}>
          <Image src={imageUrl} alt={dataCard.alt} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.copyContent}>
          <h3 className={styles.title}>{modelo}</h3>
          <div className={styles.information}>
            <div className={styles.item}>
              <span className={styles.itemTitle}>Transmisión</span>
              <div className={styles.icon}>
                <Image src={icons.traccion} alt={icons.alt} layout="fill" objectFit="cover" />
              </div>
              <span className={styles.itemTransmission}>{transmicion}</span>
            </div>
            <div className={styles.item}>
              <span>Combustible</span>
              <div className={styles.icon}>
                <Image src={icons.gas} alt={icons.alt} layout="fill" objectFit="cover" />
              </div>

              <span className={styles.itemGasOil}>{gas}</span>
            </div>
            <div className={styles.item}>
              <span>Tracción</span>
              <div className={styles.icon}>
                {' '}
                <Image src={icons.transmicion} alt={icons.alt} layout="fill" objectFit="cover" />
              </div>
              <span className={styles.itemTraction}>{traccion}</span>
            </div>
          </div>
          <div className={styles.contentBtn}>
            <Button className={styles.button} color="white">
              Consultar
            </Button>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
