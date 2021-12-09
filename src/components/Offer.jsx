import React from 'react'
import {Card} from 'react-bootstrap'
import offer from '../assets/offer.jpg'

const Offer = () => {
  return (
    <Card className="shadow border-0" bg="secondary" text="light">
      <Card.Header>Пропозицiя</Card.Header>
      <Card.Body style={{backgroundColor: 'white'}}>
        <img src={offer} alt="Акция" className="h-auto w-100" />
      </Card.Body>
    </Card>
  )
}

export default Offer
