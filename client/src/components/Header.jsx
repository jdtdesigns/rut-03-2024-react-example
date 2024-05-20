function Header(props) {

  return (
    <header>
      <h3>{props.fullName}</h3>

      <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </nav>
    </header>
  )
}

export default Header