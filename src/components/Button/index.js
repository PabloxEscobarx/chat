import { useState } from 'react'
import styles from './styles.module.css'

export const Button = ({status, className}) => {
  const [isInvite, setIsInvite] = useState(status)
  const invite = () => setIsInvite(state => !state)
  return (
    <div onClick={invite} className={`${styles.btnStyles} ${isInvite && styles.activeBtn} ${className}`}>
      {isInvite ? 'Отправлено' : 'Пригласить'}
    </div>
  )
}