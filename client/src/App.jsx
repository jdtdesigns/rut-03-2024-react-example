import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const fullName = 'JD Tadlock'

  return (
    <>
      <Header fullName={fullName} />

      <Hero fullName={fullName} />
    </>
  )
}

export default App
