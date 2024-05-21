import WorkItem from './WorkItem'

function Work() {
  const workItems = [
    {
      title: 'Turtle App',
      subText: 'Bringing turtles to life!',
      repoURL: 'https://github.com/jdtdesigns/team_api',
      demoURL: 'https://jdtadlock.com/'
    },
    {
      title: 'Tiger App',
      subText: 'Bringing tigers to life!',
      repoURL: 'https://github.com/jdtdesigns/team_api',
      demoURL: 'https://jdtadlock.com/'
    },
    {
      title: 'Buffalo App',
      subText: 'Bringing buffalo to life!',
      repoURL: 'https://github.com/jdtdesigns/team_api',
      demoURL: 'https://jdtadlock.com/'
    }
  ]

  return (
    <section className="work">

      {workItems.map((itemObj, index) => (
        <WorkItem key={index} itemObj={itemObj} />
      ))}

    </section>
  )
}

export default Work