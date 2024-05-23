import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import AuthForm from './pages/AuthForm'
import Landing from './pages/Landing'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/auth')
      .then(res => {
        setUser(res.data.user)
        setLoading(false)
      })
  }, [])

  const logoutUser = async () => {
    await axios.get('/api/auth/logout')

    setUser(null)
  }

  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <h1>Basic Client Server Auth Example</h1>
          <nav>
            <NavLink to="/">Home</NavLink>
            {user ? (
              <>
                <p>Welcome, {user.username}</p>

                <button onClick={logoutUser}>Log Out</button>
              </>
            ) : (
              <NavLink to="/auth">Register or Login</NavLink>
            )}
          </nav>

          <Routes>
            <Route path="/" element={<Landing user={user} />} />
            <Route path="/auth" element={<AuthForm setUser={setUser} />} />
          </Routes>
        </>
      )}
    </>
  )
}

// function test(num) {
//   console.log(num) // 10
// }

// test(10)

export default App
