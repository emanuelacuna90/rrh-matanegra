import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import P from '../../atoms/P/P'
import styles from './Footer.module.scss'

const Footer = ({ items }) => {
  return (
    <footer className={styles['footer-section']}>
      <div className={styles.container}>
        <P className={styles.copy} color="white" size="xs">
          © 2024 MATA NEGRA. Todos los derechos reservados.
        </P>

        <div className={styles['icon-social']}>
          {items.map((item, index) => {
            return (
              <Link key={index} href={item.url}>
                <a className={styles.icon} target='_black'>
                  <Image
                    src={`/assets/img/icons/${item.icon}.png`}
                    width={18}
                    height={18}
                    objectFit="contain"
                    alt="Icon Social"
                  />
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
