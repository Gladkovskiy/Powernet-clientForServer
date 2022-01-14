import React from 'react'
import {documents} from '../assets/documents'
import {Accordion} from 'react-bootstrap'

const Agreement = () => {
  return (
    <>
      <h2 className="text-center">Договір надання телекомунікаційних послуг</h2>
      <Accordion>
        {documents.map(({id, name, text}) => (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>{text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default Agreement
