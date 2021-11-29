import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Offer from '../components/Offer'
import StartNews from '../components/StartNews'

const Main = () => {
  return (
    <Row>
      <Col md={3}>
        <Offer />
      </Col>
      <Col>
        <StartNews />
      </Col>
    </Row>
  )
}

export default Main
