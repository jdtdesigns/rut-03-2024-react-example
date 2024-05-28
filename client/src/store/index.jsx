import { useContext, createContext, useState } from 'react'

const Context = createContext()

export function StoreProvider(props) {
  const initialState = {
    title: 'GraphQL React'
  }

  const [state, setState] = useState(initialState)

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)