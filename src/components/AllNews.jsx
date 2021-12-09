import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {NEWS_ROUTE} from '../utils/const'
import {listInfo} from '../assets/news.js'

const AllNews = ({page}) => {
  const navigate = useNavigate()
  const lastNews = listInfo.slice((page - 1) * 10, page * 10) //количество выводимых новостей

  return (
    <Card className="shadow border-0" bg="secondary" text="light">
      <Card.Header>Всі новини</Card.Header>
      <ListGroup variant="flush">
        {lastNews.map(({title, date, id}, index) => (
          <ListGroup.Item
            key={index}
            style={{cursor: 'pointer'}}
            onClick={() => navigate(NEWS_ROUTE + '/' + id)}
          >
            <span className="bg-secondary text-light p-1 me-1">{date}</span>{' '}
            <br />
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default AllNews
