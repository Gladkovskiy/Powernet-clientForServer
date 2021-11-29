import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
      <Container className="text-light">
        <div>POWERNET © 2021</div>
        <div>
          <a className="text-light" href="tel:(+38)099-437-71-89">
            (+38)099-437-71-89
          </a>{' '}
          <br />
          <a className="text-light" href="tel:(+38)093-434-96-25">
            (+38)093-434-96-25
          </a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Footer
