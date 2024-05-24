import { useStore } from '../App'

function Dummy() {
  const { state, setState } = useStore()

  return (
    <>
      <h1>Dummy</h1>

      <p>{state.settings.category}</p>

      <button onClick={() => {
        setState((oldState) => {
          return {
            ...oldState,
            settings: {
              ...oldState.settings,
              category: 'Some new category'
            }
          }
        })
      }}>Change Cat</button>
    </>
  )
}

export default Dummy