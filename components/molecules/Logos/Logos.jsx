import styles from './Logos.module.scss'
import Image from 'next/image'
import Title from '../../atoms/Title/Title'

const Logos = ({ imageUrl, text }) => {
  return (
    <div className={styles.logosContent}>
       <Image src={imageUrl} alt="Hero Slide" layout="fill" objectFit="contain" />
    </div>
  )
}

export default Logos