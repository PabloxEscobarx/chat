import styles from './styles.module.css'
import video from './img/video.png'
import arrow from './img/arrowDown.svg'
import share from './img/share.svg'
import gift from './img/gift.svg'
import remove from './img/remove.svg'
import circle from './img/circle.svg'
import info from './img/info.svg'
import redArrow from './img/arrowRed.svg'
import { useState } from 'react'

export const PrivatVideoChat = () => {
  const [activeItem, setActiveItem] = useState(0)
  const handleClick = (num) => setActiveItem(num)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Приватный видео чат</p>
        <img className={styles.img} src={arrow} alt='' />
      </div>
      <div className={styles.imgContent}>
        <div className={styles.videoWrap}>
          <img src={video} alt='' />
        </div>
        <div className={styles.imgBottomContent}>
          <div className={styles.switcher}>
            <div className={styles.switcherBG}>
              <p onClick={() => handleClick(0)} className={activeItem === 0 && styles.active}>Чат</p>
              <p onClick={() => handleClick(1)} className={activeItem === 1 && styles.active}>Меню</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.share}>
              <img src={share} alt='' />
            </div>
            <div className={styles.gift}>
              <img src={gift} alt='' />Сделать подарок
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnList}>
        <div className={styles.btn}>
          Удалить их друзей <img src={remove} alt='' />
        </div>
        <div className={styles.btn}>
          Пожаловаться <img src={circle} alt='' />
        </div>
        <div className={styles.btn}>
          Правила чата <img src={info} alt='' />
        </div>
        <div className={styles.btn}>
          Завершить видео чат <img src={redArrow} alt='' />
        </div>
      </div>
    </div>
  )
}