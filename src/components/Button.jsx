import styles from './Button.module.css'

function Button({ children, type, onClick, disabled, className }) {
  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles.button} ${type ? styles[type] : ''} ${
          className ? className : ''
        }`}
        type={type}
      >
        {children}
      </button>
    )

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${type ? styles[type] : ''}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
