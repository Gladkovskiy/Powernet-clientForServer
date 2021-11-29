import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {useMatch, useNavigate, Link} from 'react-router-dom'

import {navbarInfo} from '../../routes'
import ButtonBlock from './ButtonBlock'
import {FaBattleNet} from 'react-icons/fa'

const NavBar = () => {
  const navigate = useNavigate()
  const Active = path => !!useMatch(path)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
      <Container>
        <Link to={navbarInfo[0].path} className="text-light fw-bold ">
          <FaBattleNet className="fs-2" /> POWERNET
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            {navbarInfo.map(({path, name}) => (
              <Nav.Link
                key={path}
                onClick={() => navigate(path)}
                active={Active(path)}
                as="div"
                style={{cursor: 'pointer'}}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        <ButtonBlock />
      </Container>
    </Navbar>
  )
}

export default NavBar
