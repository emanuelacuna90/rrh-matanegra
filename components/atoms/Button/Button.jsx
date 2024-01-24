import styles from './Button.module.scss'

const Button = ({ type = 'solid', color = 'primary', children, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles[color]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
