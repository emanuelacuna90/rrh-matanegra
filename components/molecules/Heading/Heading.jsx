import P from '../../atoms/P/P'
import Title from '../../atoms/Title/Title'
import styles from './Heading.module.scss'

const Heading = ({ title, description, alignment = 'left', className = '' }) => {
  return (
    <div className={`${styles.heading} ${styles[alignment]} ${className}`}>
      <Title color='white' size="md">{title}</Title>
      <P color='white'>{description}</P>
    </div>
  )
}

export default Heading
