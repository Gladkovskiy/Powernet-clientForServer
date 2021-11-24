import React from 'react'
import UserStorage from '../../store/UserStorage'
import {AiOutlineUser} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, PERSONAL_AREA_ROUTE, LOGIN_ROUTE} from '../../utils/const'
import {observer} from 'mobx-react-lite'

const ButtonBlock = () => {
  const navigate = useNavigate()

  if (!UserStorage.isAuth) {
    return (
      <Button
        variant="outline-light"
        className="ms-3 d-flex align-center fs-4"
        onClick={() => navigate(LOGIN_ROUTE)}
      >
        <AiOutlineUser />
      </Button>
    )
  }

  const onExit = () => {
    UserStorage.setRole('')
    UserStorage.setIsAuth(false)
  }

  return (
    <>
      {UserStorage.isAdmin && UserStorage.isAuth && (
        <Button
          variant="outline-light"
          className="ms-3 d-flex align-center"
          onClick={() => navigate(ADMIN_ROUTE)}
        >
          Админка
        </Button>
      )}

      {UserStorage.isUser && UserStorage.isAuth && (
        <Button
          variant="outline-light"
          className="ms-3 d-flex align-center"
          onClick={() => navigate(PERSONAL_AREA_ROUTE)}
        >
          Личный кабинет
        </Button>
      )}

      {UserStorage.isAuth && (
        <Button
          variant="outline-light"
          className="ms-3 d-flex align-center"
          onClick={onExit}
        >
          Вихід
        </Button>
      )}
    </>
  )
}

export default observer(ButtonBlock)
