import React, {useState} from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {useMatch, useNavigate, Link} from 'react-router-dom'

import {navbarInfo} from '../../routes'
import ButtonBlock from './ButtonBlock'
import {FaBattleNet} from 'react-icons/fa'

const NavBar = () => {
  const navigate = useNavigate()
  const [visibleNavBody, setVisibleNavBody] = useState(false)

  const Active = path => !!useMatch(path)
  const toggleNav = () => setVisibleNavBody(prev => !prev)

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="p-2"
      expanded={visibleNavBody}
    >
      <Container>
        <Link to={navbarInfo[0].path} className="text-light fw-bold ">
          <FaBattleNet className="fs-2" /> POWERNET
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 ms-md-5 ">
            {navbarInfo.map(({path, name}) => (
              <Nav.Link
                key={path}
                onClick={() => {
                  navigate(path)
                  setVisibleNavBody(false)
                }}
                active={Active(path)}
                as="div"
                style={{cursor: 'pointer'}}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
          <ButtonBlock setVisibleNavBody={setVisibleNavBody} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
