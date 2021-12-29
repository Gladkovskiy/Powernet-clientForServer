import React, {useState, useEffect} from 'react'
import {FloatingLabel, Form, ListGroup} from 'react-bootstrap'
import useGetOneUser from '../../../http/react-query/user/useGetOneUser.js'
import useGetAllUsers from '../../../http/react-query/user/useGetAllUsers.js'

const FindUser = ({find, setUserData}) => {
  const [valueInput, setValueInput] = useState('')
  const [valueClick, setValueClick] = useState('')

  const [error, setError] = useState(false)

  const getOneUserInput = useGetOneUser(valueInput)
  const getOneUserClick = useGetOneUser(valueClick)
  const getAllUsers = useGetAllUsers(valueInput)

  console.log(getAllUsers.data)

  useEffect(() => {
    if (valueClick !== '') {
      getOneUserClick
        .refetch({throwOnError: true})
        .then(({data}) => {
          setUserData(data)
          find(true)
        })
        .catch(() => setError(true))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueClick])

  const onEnter = e => {
    if (e.key === 'Enter') {
      getOneUserInput
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
          value={valueInput}
          onChange={({target: {value}}) => {
            if (value !== '') return setValueInput(value)
            setValueInput('')
          }}
          onKeyPress={onEnter}
        />
      </FloatingLabel>

      {error && <div className="text-danger">Такой пользователь не найден</div>}

      {getAllUsers.isSuccess && (
        <ListGroup className="position-absolute">
          {getAllUsers.data.map((item, index) => (
            <ListGroup.Item
              key={index}
              onClick={() => setValueClick(item.fio)}
              style={{cursor: 'pointer'}}
            >
              {item.fio}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default FindUser
