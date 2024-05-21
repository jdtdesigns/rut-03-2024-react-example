import { Col } from 'react-bootstrap'

function WorkItem(props) {
  return (
    <Col xs={6}>
      <h3>{props.itemObj.title}</h3>
      <p>{props.itemObj.subText}</p>
      <a href={props.itemObj.demoURL}>See the demo</a>
      <a href={props.itemObj.repoURL}>See the repo</a>
    </Col>
  )
}

export default WorkItem