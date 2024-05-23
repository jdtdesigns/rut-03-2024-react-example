import { NavLink } from 'react-router-dom'

function Landing(props) {
  return (
    <div>{props.user ? (
      <h1>Welcome, {props.user.username}!</h1>
    ) : (
      <>
        <h2>Welcome to the Client/Server Auth Example</h2>
        <NavLink to="/auth">Click Here to Log In and Get Started!</NavLink>
      </>
    )}</div>
  )
}

export default Landing