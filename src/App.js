import './App.css'
import { useState } from 'react'
import { Privat } from './components/Privat/Privat'
import {PrivatVideoChat} from "./components/PrivatVideoChat";

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
      <PrivatVideoChat />
    </div>
  )
}

export default App
