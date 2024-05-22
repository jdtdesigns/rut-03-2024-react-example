import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import AuthForm from './pages/AuthForm'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <h1>Basic Client Server Auth Example</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/auth">Register or Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </>
  )
}

export default App
