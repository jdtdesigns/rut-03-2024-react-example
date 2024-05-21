import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <main className={`d-flex flex-column ${darkMode ? 'dark' : ''}`}>

      <Header
        setDarkMode={setDarkMode}
        setShowModal={setShowModal} />

      <div className="content flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal} />

    </main>
  )
}

export default App







