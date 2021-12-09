import React, {useState} from 'react'
import {Button, Form, FloatingLabel} from 'react-bootstrap'

const EditForm = ({news}) => {
  const [title, setTitle] = useState(news.title ?? '')
  const [text, setText] = useState(news.text ?? '')

  const titleChange = ({target: {value}}) => setTitle(value)
  const textChange = ({target: {value}}) => setText(value)

  return (
    <Form>
      <FloatingLabel label="Название новости" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Название новости"
          value={title}
          onChange={titleChange}
        />
      </FloatingLabel>

      {/* <Form.Group className="mb-3">
        <Form.Label>Изображение новости</Form.Label>
        <Form.Control type="file" />
      </Form.Group> */}

      <Form.Group className="mb-3">
        <Form.Label>Текст новости</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={text}
          onChange={textChange}
        />
      </Form.Group>
      <Button variant="primary">Изменить</Button>
    </Form>
  )
}

export default EditForm
