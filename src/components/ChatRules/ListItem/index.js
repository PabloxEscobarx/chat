import styles from './styles.module.css'

export const ListItem = ({ title, text }) => (
  <div>
    <h2 className={styles.h2}>{title}</h2>
    <p className={styles.p}>{text}</p>
  </div>
)