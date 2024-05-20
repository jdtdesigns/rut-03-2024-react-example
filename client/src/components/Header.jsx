function Header(props) {
  const toggleDarkMode = () => {
    props.setDarkMode(!props.darkMode)
  }

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>

      <nav>
        <button>Show Modal</button>

        <button onClick={toggleDarkMode}>Dark Mode</button>

        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
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