import React from 'react'
import {Form} from 'react-bootstrap'

const ChooseTariff = ({tariffs, setChoose, setSelectTariff}) => {
  const select = ({target: {value}}) => {
    setChoose(true)
    setSelectTariff(tariffs[value])
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>Выберите тариф</Form.Label>
      <Form.Select onChange={select}>
        <option>Тариф</option>
        {tariffs.map(({name, id}, index) => (
          <option key={id} value={index}>
            {name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default ChooseTariff
