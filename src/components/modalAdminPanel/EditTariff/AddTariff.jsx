import React from 'react'
import ModalTemplate from '../ModalTemplate'
import AddForm from './AddForm'

const AddTariff = ({show, handleClose}) => {
  return (
    <ModalTemplate show={show} handleClose={handleClose} name="Добавить тариф">
      <AddForm handleClose={handleClose} />
    </ModalTemplate>
  )
}

export default AddTariff
