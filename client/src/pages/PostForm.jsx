import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_POST } from '../graphql/mutations'
import { GET_POSTS } from '../graphql/queries'

import { useStore } from '../store'

function PostForm() {
  const { state, setState } = useStore()
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

    setState((oldState) => {
      return {
        ...oldState,
        title: 'Some New Title'
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{state.title}</h1>

      <input onChange={handleInputChange} name="title" type="text" placeholder="Enter title" />
      <input onChange={handleInputChange} name="body" type="text" placeholder="Enter body of post" />
      <button>Submit</button>
    </form>
  )
}

export default PostForm