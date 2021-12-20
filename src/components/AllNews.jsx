import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {NEWS_ROUTE} from '../utils/const'
import {normalizeDate} from '../utils/pureFunction.js'

const AllNews = ({page}) => {
  const navigate = useNavigate()

  return (
    <Card className="shadow border-0" bg="secondary" text="light">
      <Card.Header>Всі новини</Card.Header>
      <ListGroup variant="flush">
        {page.map(({title, updatedAt, id}, index) => (
          <ListGroup.Item
            key={index}
            style={{cursor: 'pointer'}}
            onClick={() => navigate(NEWS_ROUTE + '/' + id)}
          >
            <span className="bg-secondary text-light p-1 me-1">
              {normalizeDate(updatedAt)}
            </span>{' '}
            <br />
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default AllNews
