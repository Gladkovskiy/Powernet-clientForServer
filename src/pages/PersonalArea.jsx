import React, {useState, useEffect} from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import {delay} from '../utils/delay'
import Spinner from '../components/Spinner'
import {userData} from '../assets/userData'

const PersonalArea = () => {
  const [isLoading, setLoading] = useState(true)
  const [user, setUser] = useState()

  //данные с сервера эмитируем
  useEffect(() => {
    delay().then(() => {
      setUser(userData)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Spinner />

  return (
    <Row>
      <Col md={8} sm className="m-auto mt-3">
        <Card className="shadow border-0" bg="light" text="dark">
          <Card.Header className="bg-secondary text-light">
            Личные данные
          </Card.Header>
          <Card.Body>
            <Card.Title>ФИО</Card.Title>
            <Card.Text>{user.fio}</Card.Text>
            <hr />
            <Card.Title>Адрес</Card.Title>
            <Card.Text>{user.adress}</Card.Text>
            <hr />
            <Card.Title>Тариф</Card.Title>
            <Card.Text>
              {user.tariff} &nbsp;
              {user.active ? (
                <span className="text-success">Активен</span>
              ) : (
                <span className="text-danger">Не активен</span>
              )}
            </Card.Text>
            <hr />
            <Card.Title>Счёт</Card.Title>
            <Card.Text>{user.score} грн.</Card.Text>
            <hr />

            <Card.Title>Пополнить счёт</Card.Title>
            <Button variant="outline-primary">Оплатить</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default PersonalArea
