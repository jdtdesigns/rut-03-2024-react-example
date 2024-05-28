import { useQuery } from '@apollo/client'
import { Routes, Route, NavLink } from 'react-router-dom'

import PostForm from './pages/PostForm'
import SinglePost from './pages/SinglePost'

import { GET_POSTS } from './graphql/queries'
import { useStore } from './store'

function Landing() {
  const { loading, error, data } = useQuery(GET_POSTS)

  return (
    <>
      {loading && <p>Loading...</p>}

      {data?.getPosts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <NavLink to={`/post/${post._id}`}>View Post</NavLink>
        </div>
      ))}
    </>
  )
}

function Header() {
  const { state } = useStore()

  return (
    <header>
      <h3>{state.title}</h3>
    </header>
  )
}


function App() {
  return (
    <>
      <Header />

      <NavLink to="/">Home</NavLink>
      <br />
      <br />

      <PostForm />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </>
  )
}

export default App
