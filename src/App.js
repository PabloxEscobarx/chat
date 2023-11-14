import './App.css'
import { useState } from 'react'
import { Privat } from './components/Privat/Privat'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div className='App'>
      <Privat />
    </div>
  )
}

export default App
