import styles from "./Menu.module.scss";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Container from "../../atoms/Container/Container";

export const Menu = ({ logo, items, socials }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.header} ${isOpen && styles.active} `}>
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      <nav className={`${styles.menu} ${isOpen && styles.active}`}>
        <Container className={styles.container}>
          <Link href="/">
            <a style={{ display: "flex" }} className={styles.brand}>
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

          <div className={styles['icon-social']}>
          {socials.map((item, index) => {
            return (
              <Link key={index} href={item.url}>
                <a className={styles.icon} target='_black'>
                  <Image
                    src={`/assets/img/icons/${item.icon}.png`}
                    width={18}
                    height={18}
                    objectFit="contain"
                  />
                </a>
              </Link>
            )
          })}
        </div>

          <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
            <span className={`${styles.span} ${isOpen ? styles.expanded : ''}`}></span>
            <span className={`${styles.span} ${isOpen ? styles.expanded : ''}`}></span>
            <span className={`${styles.span} ${isOpen ? styles.expanded : ''}`}></span>
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
  );
};

export default Menu;
