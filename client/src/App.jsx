import { useState } from 'react'

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
    <main className={darkMode ? 'dark' : ''}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Landing />

      <About />

      <Contact />

      <Footer />

      {showModal && <Modal />}

    </main>
  )
}

export default App

// function useState(initialValue) {
//   const setterFunction = (newValue) => {
//     initialValue = newValue
//   }

//   return [initialValue, setterFuction]
// }

// const [something, setSomething] = useState('some string')

// // something = 'another string'
// setSomething('another string')

// console.log(something)







