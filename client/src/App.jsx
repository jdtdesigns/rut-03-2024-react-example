import { useContext, createContext, useState } from 'react'

const Context = createContext()

function Provider(props) {
  const initialState = {
    user: null,
    settings: {
      category: 'Art',
      difficulty: 'easy',
      region: 'US'
    }
  }
  const [state, setState] = useState(initialState)

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)

import Dummy from './components/Dummy'
import Another from './components/Another'

function App() {
  return (
    <Provider>
      <>
        <h1>Main Base</h1>

        <Dummy />

        <Another />
      </>
    </Provider>
  )
}

export default App
