import WorkItem from './WorkItem'
import { Row } from 'react-bootstrap'

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
    <Row as="section">

      {workItems.map((itemObj, index) => (
        <WorkItem key={index} itemObj={itemObj} />
      ))}

    </Row>
  )
}

export default Work