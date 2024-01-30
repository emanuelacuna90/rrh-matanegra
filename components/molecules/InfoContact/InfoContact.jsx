import { googleMapDirection } from '../../../utils/constants'
import P from '../../atoms/P/P'
import styles from './InfoContact.module.scss'

const InfoContact = ({ className }) => {
  return (
    <div className={`${styles.infoContact} ${className}`}>
      <P className={styles.title}>Oficina central</P>
      <a href={googleMapDirection} className={styles.link}>
        <P size="xs">Tucuman 345, 6to A</P>
      </a>
      <P size="xs">Celular: </P>
      <P size="xs">+54 9 299 535-2351</P>
    </div>
  )
}

export default InfoContact
