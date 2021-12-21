import React from 'react'
import {Modal} from 'react-bootstrap'

const ModalTemplate = ({show, handleClose, children, name}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{minHeight: '25vh'}}>{children}</Modal.Body>
    </Modal>
  )
}

export default ModalTemplate
