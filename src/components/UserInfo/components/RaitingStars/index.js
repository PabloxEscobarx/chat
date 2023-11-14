import star from './img/star.svg'
import starDisable from './img/starDisable.svg'
import styles from './styles.module.css'

export const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const decimalPart = rating - fullStars
  const emptyStars = 5 - Math.ceil(rating)

  const Star = ({ isFilled }) => (
    <div className={styles.imgWrap}>
      <img className={styles.img} src={isFilled ? star : starDisable} alt='' />
    </div>
  )

  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} isFilled={true} />)
  }

  if (decimalPart > 0) {
    stars.push(<Star key={fullStars} isFilled={false} />)
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={fullStars + i + 1} isFilled={false} />)
  }

  return <div className={styles.raiting}>{stars}</div>
}