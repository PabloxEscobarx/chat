import styles from './styles.module.css'
import arrow from './img/arrow.svg'

export const ModalComplaining = ({ isOpen, onClose, name }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent}>
        <div className={styles.top}>
          <h2>Пожаловаться</h2>
          <img onClick={onClose} src={arrow} alt='' />
        </div>
        <div className={styles.about}>
          <p>Укажите причину жалобы на хостес <span>{name}</span></p>
        </div>
        <form className={styles.form}>
          <textarea className={styles.textArea} placeholder={'Опишите свою жалобу'} />
          <button className={styles.btn}>Пожаловаться</button>
        </form>
      </div>
    </div>
  )
}

