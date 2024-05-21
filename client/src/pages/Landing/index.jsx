import Hero from './components/Hero'
import Work from './components/Work'

import { Container } from 'react-bootstrap'

function Landing() {
  return (
    <>
      <Hero />

      <Container fluid>
        <Work />
      </Container>
    </>
  )
}

export default Landing