import styles from './styles.module.css'
import arrow from './imgs/arrow.svg'
import logo from './imgs/leftModalLogo.svg'

export const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.imgArrow} src={arrow} alt='arrow' />
      <div className={styles.content}>
        <img src={logo} alt='logo' />
        <p>
          На вашем балансе недостаточно <br /> Амуров для приватных бесед
        </p>
      </div>
      <a className={styles.addBalance}>Пополить баланс</a>
    </div>
  )
}