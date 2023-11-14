import styles from './index.module.css'
import { Searcher } from '../Searcher/Searcher'
import logo from './imgs/logoCard.png'
import { StreamerItem } from './components'
import { Modal } from '../Modal'

const arr = [
  {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },{
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },{
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },{
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },{
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },{
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: true,
    isOnline: true,
  }, {
    img: logo,
    title: 'Streamer`s username',
    subTitle: 'Приношу удачу...',
    rating: 5,
    status: false,
    isOnline: false,
  },
]

export const Privat = () => {
  return (
    <div className={styles.privatWrapper}>
      <Searcher title={'Приватные стримы и чаты'} />
      <div className={styles.bottom}>
        {arr.map((item, i) => (
          <StreamerItem item={item} key={i} />
        ))}
      </div>
      {/*<Modal/>*/}
    </div>
  )
}