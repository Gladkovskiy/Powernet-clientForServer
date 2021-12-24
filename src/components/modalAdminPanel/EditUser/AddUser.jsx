import React from 'react'
import ModalTemplate from '../ModalTemplate'
import AddForm from './AddForm'

const AddUser = ({show, handleClose}) => {
  return (
    <ModalTemplate
      show={show}
      handleClose={handleClose}
      name="Добавить пользователя"
    >
      <AddForm handleClose={handleClose} />
    </ModalTemplate>
  )
}

export default AddUser
