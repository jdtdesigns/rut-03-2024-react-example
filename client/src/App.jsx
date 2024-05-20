import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const fullName = 'JD Tadlock'
  const [count, setCount] = useState(0)

  return (
    <>
      <Header fullName={fullName} />

      <Hero />

      <p>{count}</p>

      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
    </>
  )
}

export default App
