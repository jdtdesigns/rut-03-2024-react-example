import { useStore } from '../App'

function Another() {
  const { state } = useStore()

  return (
    <>
      <h1>Another | Category: {state.settings.category}</h1>

    </>
  )
}

export default Another