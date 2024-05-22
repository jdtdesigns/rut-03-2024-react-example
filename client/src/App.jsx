import { useState, useEffect } from 'react'
import axios from 'axios'

const initialFormState = {
  username: '',
  email: '',
  message: '',
  getAds: false,
  access_key: '45ea0a30-6748-4a2f-b94b-e69469fa4e0b',
  subject: 'Message From User'
}

function App() {
  const [formData, setFormData] = useState(initialFormState)

  useEffect(() => {
    axios.get('/api/test')
      .then(res => {
        console.log(res.data)
      })
  }, [])

  const handleInputChange = (event) => {
    const input = event.target.name

    if (input === 'getAds') {
      return setFormData({
        ...formData,
        getAds: event.target.checked
      })
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const url = 'https://api.web3forms.com/submit'

    const res = await axios.post(url, formData)

    setFormData({ ...initialFormState })
  }

  return (
    <>
      <h1>Forms Advanced</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="username"
          type="username"
          value={formData.username}
          placeholder="Enter your username" required />

        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email" required />

        <textarea
          onChange={handleInputChange}
          name="message"
          value={formData.message}
          placeholder="Enter your message"
          rows="3" required></textarea>

        <label htmlFor="advertisements">
          Receive Ads?
          <input
            onChange={handleInputChange}
            name="getAds"
            id="advertisements"
            checked={formData.getAds}
            type="checkbox" />
        </label>

        <button>Submit</button>
      </form>
    </>
  )
}

export default App
