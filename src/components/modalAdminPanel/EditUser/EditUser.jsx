import React, {useState} from 'react'
import ModalTemplate from '../ModalTemplate'
import FindUser from './FindUser'
// import {userData} from '../../../assets/userData'
import UserForm from './UserForm'

const EditUser = ({show, handleClose}) => {
  const [find, setFind] = useState(false)
  const [userData, setUserData] = useState(null)

  const onHide = () => {
    handleClose()
    setFind(false)
  }

  return (
    <ModalTemplate
      show={show}
      handleClose={onHide}
      name="Изменить/удалить пользователя"
    >
      {!find ? (
        <FindUser find={setFind} setUserData={setUserData} />
      ) : (
        <UserForm user={userData} close={handleClose} />
      )}
    </ModalTemplate>
  )
}

export default EditUser
