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
    <header className="d-flex justify-content-between px-3 py-4">
      <h3>Logo</h3>

      <nav>
        {/* Hide the button when showModal is true and show it when showModal is false */}
        <button className="me-4" onClick={showModal}>Show Modal</button>

        <button className="me-4" onClick={toggleDarkMode}>Dark Mode</button>

        <NavLink className="me-2" to="/">Home</NavLink>
        <NavLink className="me-2" to="/about">About</NavLink>
        <NavLink className="me-2" to="/contact">Contact</NavLink>
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