import { Modal as BSModal, Button } from 'react-bootstrap'

function Modal(props) {

  const hideModal = () => {
    props.setShowModal(false)
  }

  return (
    <BSModal show={props.showModal} className="">
      <BSModal.Header>
        <BSModal.Title>Modal Example</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni qui nostrum minus amet numquam atque eum enim eaque reiciendis.</p>
      </BSModal.Body>
      <BSModal.Footer>
        <Button variant="secondary" onClick={hideModal}>Close Modal</Button>
      </BSModal.Footer>
    </BSModal>
  )
}

export default Modal