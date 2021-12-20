import React from 'react'
import UserStorage from '../../store/UserStorage'
import {AiOutlineUser} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, PERSONAL_AREA_ROUTE, LOGIN_ROUTE} from '../../utils/const'
import {observer} from 'mobx-react-lite'

const ButtonBlock = ({setVisibleNavBody}) => {
  const navigate = useNavigate()

  if (!UserStorage.isAuth) {
    return (
      <Button
        variant="outline-light"
        className="ms-3 d-flex align-center fs-4 ms-auto"
        onClick={() => {
          navigate(LOGIN_ROUTE)
          setVisibleNavBody(false)
        }}
      >
        <AiOutlineUser />
      </Button>
    )
  }

  const onExit = () => {
    UserStorage.setRole('')
    UserStorage.setIsAuth(false)
    setVisibleNavBody(false)
    localStorage.setItem('token', null)
  }

  return (
    <span className="ms-auto d-flex">
      {UserStorage.isAdmin && UserStorage.isAuth && (
        <Button
          variant="outline-light"
          className="ms-3 d-flex align-center"
          onClick={() => {
            navigate(ADMIN_ROUTE)
            setVisibleNavBody(false)
          }}
        >
          Админка
        </Button>
      )}

      {UserStorage.isUser && UserStorage.isAuth && (
        <Button
          variant="outline-light"
          className="ms-3 d-flex align-center"
          onClick={() => {
            navigate(PERSONAL_AREA_ROUTE)
            setVisibleNavBody(false)
          }}
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
    </span>
  )
}

export default observer(ButtonBlock)
