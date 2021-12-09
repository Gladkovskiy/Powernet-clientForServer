import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Offer from '../components/Offer'
import StartNews from '../components/StartNews'

const Main = () => {
  return (
    <Row>
      <Col sm={{order: 2}}>
        <StartNews />
      </Col>
      <Col sm={{span: 4, order: 1}}>
        <Offer />
      </Col>
    </Row>
  )
}

export default Main
