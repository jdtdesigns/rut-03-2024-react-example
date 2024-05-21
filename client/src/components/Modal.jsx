function Modal(props) {

  const hideModal = () => {
    props.setShowModal(false)
  }

  return (
    <div className="modal">
      <h3>Modal Example</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui nostrum minus amet numquam atque eum enim eaque reiciendis.</p>
      <button onClick={hideModal}>Close Modal</button>
    </div>
  )
}

export default Modal