import Image from 'next/image'
import Link from 'next/link'
import styles from './Whatsapp.module.scss'

const Whatsapp = ({ logo, numberPhone, message }) => {
  const linkProps = {
    href: `https://wa.me/${numberPhone}?text=${message}`,
    target: '_blank',
    rel: 'noreferrer',
  }

  return (
    <Link {...linkProps}>
      <a className={styles['btn-whatsapp']} {...linkProps}>
        <Image src={logo} alt="Matanegra" width={75} height={75} priority objectFit="contain" />
      </a>
    </Link>
  )
}

export default Whatsapp
