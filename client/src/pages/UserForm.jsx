import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { useStore } from '../store'

import { LOGIN_USER } from '../graphql/mutations'

function UserForm() {
  const navigate = useNavigate()
  const { setState } = useStore()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formData
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await loginUser()

    setState((oldState) => {
      return {
        ...oldState,
        user: res.data.loginUser
      }
    })

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>

      <input onChange={handleInputChange} name="email" type="text" placeholder="Enter Email" />
      <input onChange={handleInputChange} name="password" type="password" placeholder="Enter Password" />
      <button>Submit</button>
    </form>
  )
}

export default UserForm