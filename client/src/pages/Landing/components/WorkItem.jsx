function WorkItem(props) {
  return (
    <div className="work-item">
      <h3>{props.itemObj.title}</h3>
      <p>{props.itemObj.subText}</p>
      <a href={props.itemObj.demoURL}>See the demo</a>
      <a href={props.itemObj.repoURL}>See the repo</a>
    </div>
  )
}

export default WorkItem