import Title from './components/Title'
import CallToAction from './components/CallToAction'

import './hero.scss'

function Hero() {
  return (
    <section className="hero">
      <Title />

      <CallToAction />
    </section>
  )
}

export default Hero