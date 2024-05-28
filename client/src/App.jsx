import { useQuery } from '@apollo/client'

import PostForm from './pages/PostForm'

import { GET_POSTS } from './graphql/queries'

function App() {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (data) {
    console.log(data)
  }

  return (
    <>
      <h1>Main Base</h1>

      {loading && <p>Loading...</p>}

      <PostForm />

      {data && data.getPosts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <a href="#">View Post</a>
        </div>
      ))}
    </>
  )
}

export default App
