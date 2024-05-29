import { useQuery } from '@apollo/client'
import { Routes, Route, NavLink } from 'react-router-dom'

import PostForm from './pages/PostForm'
import SinglePost from './pages/SinglePost'
import UserForm from './pages/UserForm'

import { GET_POSTS } from './graphql/queries'
import { useStore } from './store'

function Landing() {
  const { state } = useStore()

  const { error, data } = useQuery(GET_POSTS)

  return (
    <>
      {state.loading && <div className="load-overlay">
        <h1>Loading...</h1>
      </div>}

      <PostForm />

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

      <nav>
        {state.user ? (
          <>
            <h3>Welcome, {state.user.username}</h3>
            <a href="#">Log Out</a>
          </>
        ) : (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth">Log In</NavLink>
          </>
        )}
      </nav>
    </header>
  )
}


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<UserForm />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </>
  )
}

export default App
