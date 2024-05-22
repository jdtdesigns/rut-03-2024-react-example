import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [charData, setCharData] = useState([])
  const [character, setCharacter] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const url = 'https://swapi.dev/api/people'

    axios.get(url)
      .then(res => {
        setCharData(res.data.results)
        console.log(res.data.results)
      })
  }, [])

  const getData = () => {
    const url = `https://swapi.dev/api/people?search=${search}`

    axios.get(url)
      .then(res => {
        console.log(res.data)
        setCharData(res.data.results)
      })
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <h1>Main Base</h1>

      {/* <p>{search}</p> */}

      <input onChange={handleInputChange} onKeyDown={(e) => {
        if (e.key === 'Enter') getData()
      }} type="text" placeholder="Type a character name" />

      <main>
        {character && (
          <div>
            <h3>Name: {character.name}</h3>
            <p>Born: {character.birth_year}</p>
          </div>
        )}

        <button onClick={getData}>Get Character</button>

        {!charData.length && <p>Loading...</p>}

        {charData.map((charObj, index) => (
          <div key={charObj.url}>
            <h3>Name: {charObj.name}</h3>
            <p>Born: {charObj.birth_year}</p>
          </div>
        ))}
      </main>
    </>
  )
}

export default App
