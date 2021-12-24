import React from 'react'
import {Card, ListGroup, Button, Row, Col} from 'react-bootstrap'

const AdminPanel = ({modalOpen}) => {
  return (
    <Row>
      <Col md={6} className="m-auto mt-3">
        <Card className="shadow border-0" bg="secondary" text="light">
          <Card.Header>Администрирование</Card.Header>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <span>Новость</span>
              </div>
              <div>
                <Button
                  className="ms-2"
                  variant="outline-primary"
                  onClick={() => modalOpen.setAddNews(true)}
                >
                  Добавить
                </Button>
                <Button
                  className="ms-2"
                  variant="outline-primary"
                  onClick={() => modalOpen.setEditNews(true)}
                >
                  Изменить
                </Button>
                <Button
                  className="ms-2"
                  variant="outline-danger"
                  onClick={() => modalOpen.setDeleteNews(true)}
                >
                  Удалить
                </Button>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                {' '}
                <span>Пользователь</span>
              </div>
              <div>
                <Button
                  variant="outline-primary"
                  onClick={() => modalOpen.setAddUser(true)}
                >
                  Добавить
                </Button>
                <Button
                  className="ms-2"
                  variant="outline-primary"
                  onClick={() => modalOpen.setEditUser(true)}
                >
                  Изменить/удалить
                </Button>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <span>Тариф</span>
              </div>
              <div>
                <Button
                  variant="outline-primary"
                  onClick={() => modalOpen.setAddTariff(true)}
                >
                  Добавить
                </Button>
                <Button
                  className="ms-2"
                  variant="outline-danger"
                  onClick={() => modalOpen.setEditTariff(true)}
                >
                  Изменить
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default AdminPanel
