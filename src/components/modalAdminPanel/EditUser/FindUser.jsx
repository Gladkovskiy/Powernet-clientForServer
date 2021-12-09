import React, {useState} from 'react'
import {FloatingLabel, Form} from 'react-bootstrap'

const FindUser = ({find}) => {
  const [value, setValue] = useState('')

  const onEnter = e => {
    if (e.key === 'Enter') {
      console.log(value)
      find(true)
    }
  }

  return (
    <FloatingLabel label="Поиск по IP или ФИО" className="mb-3">
      <Form.Control
        type="text"
        placeholder="Поиск по IP или ФИО"
        value={value}
        onChange={({target: {value}}) => setValue(value)}
        onKeyPress={onEnter}
      />
    </FloatingLabel>
  )
}

export default FindUser
