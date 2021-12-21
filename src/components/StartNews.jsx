import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {NEWS_ROUTE} from '../utils/const'
import useGetNews from '../http/react-query/news/useGetNews.js'
import Spinner from '../components/Spinner'
import {normalizeDate} from '../utils/pureFunction.js'

const StartNews = () => {
  const getNews = useGetNews(1, 10)
  const navigate = useNavigate()

  if (getNews.isLoading) return <Spinner />
  const lastNews = getNews.data.rows

  return (
    <Card className="shadow border-0" bg="secondary" text="light">
      <Card.Header>Останні новини</Card.Header>
      <ListGroup variant="flush">
        {lastNews.map(({title, updatedAt, id}, index) => (
          <ListGroup.Item
            key={index}
            style={{cursor: 'pointer'}}
            onClick={() => navigate(NEWS_ROUTE + '/' + id)}
          >
            <span className="bg-secondary text-light p-1">
              {normalizeDate(updatedAt)}
            </span>
            <br />
            {title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}

export default StartNews
