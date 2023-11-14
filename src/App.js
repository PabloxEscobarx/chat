import './App.css'
import { useState } from 'react'
import { ChatRules } from './components/ChatRules'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  const closeModal = () => setModalOpen(false)
  return (
    <div className='App'>
      {/*<ModalComplaining isOpen={modalOpen} onClose={closeModal} name={'Ангелина'} />*/}
      {/*<button onClick={openModal}>CLICK here</button>*/}
      <ChatRules />
    </div>
  )
}

export default App
