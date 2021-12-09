import React, {useState} from 'react'
import ModalTemplate from '../ModalTemplate'
import EditForm from './EditForm'
import ChooseTariff from './ChooseTariff'
import {tarrifs} from '../../../assets/tarrifs.js'

const EditTarif = ({show, handleClose}) => {
  const [choose, setChoose] = useState(false)
  const [selectTariff, setSelectTariff] = useState()

  const close = () => {
    handleClose()
    setChoose(false)
  }
  return (
    <ModalTemplate show={show} handleClose={close} name="Изменить тариф">
      {!choose ? (
        <ChooseTariff
          tariffs={tarrifs}
          setChoose={setChoose}
          setSelectTariff={setSelectTariff}
        />
      ) : (
        <EditForm selectTariff={selectTariff} />
      )}
    </ModalTemplate>
  )
}

export default EditTarif
