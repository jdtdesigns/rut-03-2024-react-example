import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import AuthForm from './pages/AuthForm'
import Landing from './pages/Landing'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get('/api/auth')
      .then(res => {
        setUser(res.data.user)
      })
  }, [])

  return (
    <>
      <h1>Basic Client Server Auth Example</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        {user ? (
          <button>Log Out</button>
        ) : (
          <NavLink to="/auth">Register or Login</NavLink>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </>
  )
}

export default App
