
const styles = {
  headerStyles: {
    background: '#555',
    color: '#eee'
  }
}

function App() {
  return (
    <main>
      <header style={styles.headerStyles} className="row justify-between align-center">
        <h3>Logo</h3>

        <nav>
          <a className="red" href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    </main>
  )
}

export default App
