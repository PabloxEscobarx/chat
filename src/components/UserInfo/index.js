import styles from './styles.module.css'
import arrow from './img/arrow-left.svg'
import logo from './img/logo.svg'
import { Button } from '../Button'
import { RatingStars } from './components/RaitingStars'

const arr = [
  'Фильмы', 'Фильмы', 'Фильмы', 'Фильмы', 'Фильмы','Фильмы', 'Фильмы', 'Фильмы', 'Фильмы', 'Фильмы',
]

export const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img className={styles.img} src={arrow} alt='arrow' />
        <Button className={styles.btn} status={true} />
      </div>
      <div className={styles.photo}>
        <img src={logo} alt='logo' />
        <p>Ангелина</p>
        <RatingStars rating={2} />
      </div>
      <div className={styles.about}>
        <h2>О себе</h2>
        <p>
          Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился
          в страшное
        </p>
      </div>
      <div className={styles.list}>
        <p>
          Интересы
        </p>
        <div className={styles.listItems}>
          {arr.map((item, i) => <span className={styles.span} key={i}>{item}</span>)}
        </div>
      </div>
    </div>
  )
}