function Hero() {
  const fullName = 'JD Tadlock'
  const age = 44
  const outputAge = false

  return (
    <section className="hero text-center">
      <h1>{fullName}</h1>
      {outputAge && <p>Age: {age}</p>}
      <p>Dev'ing Your Dreams</p>
    </section>
  )
}

export default Hero