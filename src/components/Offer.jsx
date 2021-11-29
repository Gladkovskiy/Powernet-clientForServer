import React from 'react'
import {Card} from 'react-bootstrap'
import offer from '../assets/offer.jpg'

const Offer = () => {
  return (
    <Card className="shadow border-0" bg="secondary" text="light">
      <Card.Header>Пропозицiя</Card.Header>
      <Card.Body style={{height: '25rem'}} className="position-relative">
        <img
          src={offer}
          alt="Акция"
          className="h-100 position-absolute w-100"
          style={{left: '0', top: '0'}}
        />
      </Card.Body>
    </Card>
  )
}

export default Offer
