import { NavLink } from 'react-router-dom'

function Header(props) {
  const toggleDarkMode = () => {
    props.setDarkMode((oldValue) => {
      return !oldValue
    })
  }

  const showModal = () => {
    props.setShowModal(true)
  }

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>

      <nav>
        {/* Hide the button when showModal is true and show it when showModal is false */}
        <button onClick={showModal}>Show Modal</button>

        <button onClick={toggleDarkMode}>Dark Mode</button>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header

//  <button id="some-id"></button>

// const el = document.querySelector('#some-id')

// function doSomething() {

// }

// el.addEventListener('click', doSomething)