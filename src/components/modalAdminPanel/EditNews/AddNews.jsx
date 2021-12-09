import React from 'react'
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import ModalTemplate from '../ModalTemplate'

const AddNews = ({show, handleClose}) => {
  return (
    <ModalTemplate
      show={show}
      handleClose={handleClose}
      name="Добавить новость"
    >
      <Form>
        <FloatingLabel label="Название новости" className="mb-3">
          <Form.Control type="text" placeholder="Название новости" />
        </FloatingLabel>

        <Form.Group className="mb-3">
          <Form.Label>Изображение новости</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Текст новости</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <Button variant="primary">Опубликовать</Button>
      </Form>
    </ModalTemplate>
  )
}

export default AddNews
