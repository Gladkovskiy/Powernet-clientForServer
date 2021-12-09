import React from 'react'
import {Form} from 'react-bootstrap'

const ChooseTariff = ({tariffs, setChoose, setSelectTariff}) => {
  const select = ({target: {value}}) => {
    setChoose(true)
    setSelectTariff(tariffs[value - 1])
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>Выберите тариф</Form.Label>
      <Form.Select onChange={select}>
        {tariffs.map(({name, id}) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default ChooseTariff
