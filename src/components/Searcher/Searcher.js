import styles from './styles.module.css'
import arrow from './img/arrow.svg'
import { useState } from 'react'
import search from './img/search.svg'

export const Searcher = ({ title }) => {
  const [isActive, setIsActive] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const clickHandler = (id) => setIsActive(id)
  const changeValue = (event) => setInputValue(event.target.value)

  return (
    <div className={styles.searcherWrap}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <img style={{ cursor: 'pointer' }} src={arrow} alt='arrow' />
      </div>
      <div className={styles.switcher}>
        <p className={isActive === 0 && styles.active} onClick={() => clickHandler(0)}>Хостес</p>
        <div className={styles.verticalLine}></div>
        <p className={isActive === 1 && styles.active} onClick={() => clickHandler(1)}>Друзья</p>
      </div>
      <form className={styles.form}>
        <input
          value={inputValue}
          onChange={changeValue}
          placeholder={'Поиск по имени'}
          className={styles.input}
          type='text'
        />
        <img className={styles.img} src={search} alt='search' />
      </form>
    </div>
  )
}