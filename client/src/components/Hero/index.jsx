import Title from './components/Title'
import CallToAction from './components/CallToAction'

import './hero.scss'

function Hero(props) {
  return (
    <section className="hero">
      <Title />
      <p>Made by {props.fullName}!</p>
      <CallToAction />
    </section>
  )
}

export default Hero