import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_POST } from '../graphql/mutations'
import { GET_POSTS } from '../graphql/queries'

function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })
  const [createPost] = useMutation(CREATE_POST, {
    variables: formData,
    refetchQueries: [GET_POSTS]
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await createPost()

    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} name="title" type="text" placeholder="Enter title" />
      <input onChange={handleInputChange} name="body" type="text" placeholder="Enter body of post" />
      <button>Submit</button>
    </form>
  )
}

export default PostForm