import styles from './styles.module.css'
import star from './../imgs/star.svg'
import { truncateString } from '../../../functions'
import { Button } from '../../Button'

export const StreamerItem = (props) => {
  const { img, title, subTitle, rating, status, isOnline } = props.item

  return (
    <div className={styles.streamerItemWrap}>
      <div className={styles.left}>
        <img className={styles.imgLogo} src={img} alt='img' />
        <div className={`${isOnline ? styles.imgOnline : styles.imgOffline} ${styles.imgStatus}`}></div>
        <div className={styles.infoCards}>
          <h2>{title}</h2>
          <p className={styles.raitingNum}>
            <img style={{ marginRight: '5px' }} src={star} alt='star' />
            {rating}</p>
          <div>
            <p className={styles.subTitleText}>{truncateString(subTitle)}</p>
          </div>
        </div>
      </div>
      <div>
        <Button className={styles.btn} status={status} />
      </div>
    </div>
  )
}