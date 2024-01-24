import styles from './Menu.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Container from '../../atoms/Container/Container'

export const Menu = ({ logo, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`${styles.header} ${isOpen && styles.active} `}>
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      <nav className={`${styles.menu} ${isOpen && styles.active}`}>
        <Container className={styles.container}>
          <Link href="/">
            <a style={{ display: 'flex' }}>
              {logo && (
                <Image
                  src={logo}
                  alt="Matanegra"
                  width={115}
                  height={49}
                  priority
                  objectFit="contain"
                />
              )}
            </a>
          </Link>

          <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={`/assets/img/icons/${isOpen ? 'hamburger-close' : 'hamburger'}.svg`}
              alt="Hamburger"
              width={32}
              height={28}
            />
          </div>

          <div className={styles.menuItems}>
            {items?.length &&
              items.map(({ url, label }) => (
                <Link key={url} href={url}>
                  <a className={styles.item}>{label}</a>
                </Link>
              ))}
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Menu
