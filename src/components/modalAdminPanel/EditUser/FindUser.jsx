import React, {useState} from 'react'
import {FloatingLabel, Form} from 'react-bootstrap'
import useGetOneUser from '../../../http/react-query/user/useGetOneUser.js'
import useGetAllUsers from '../../../http/react-query/user/useGetAllUsers.js'

const FindUser = ({find, setUserData}) => {
  const [value, setValue] = useState()
  const [error, setError] = useState(false)
  const getOneUser = useGetOneUser(value)
  const getAllUsers = useGetAllUsers(value)

  console.log(getAllUsers.data)

  const onEnter = e => {
    if (e.key === 'Enter') {
      getOneUser
        .refetch({throwOnError: true})
        .then(({data}) => {
          setUserData(data)
          find(true)
        })
        .catch(() => setError(true))
    }
  }

  return (
    <>
      <FloatingLabel label="Поиск по IP или ФИО" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Поиск по IP или ФИО"
          value={value}
          onChange={({target: {value}}) => {
            if (value !== '') return setValue(value)
            setValue()
          }}
          onKeyPress={onEnter}
        />
      </FloatingLabel>
      {error && <div className="text-danger">Такой пользователь не найден</div>}
    </>
  )
}

export default FindUser
