import React, {useState} from 'react'
import {ListGroup} from 'react-bootstrap'
import useGetNews from '../../../http/react-query/news/useGetNews.js'
import Spinner from '../../Spinner'
import {normalizeDate} from '../../../utils/pureFunction.js'

const NewsList = ({news}) => {
  const [active, setActive] = useState(null)
  const allNews = useGetNews(1, 5)

  if (allNews.isLoading) return <Spinner />

  const lastNews = allNews.data.rows

  return (
    <ListGroup variant="flush">
      {lastNews.map(({title, updatedAt, id, text}, index) => (
        <ListGroup.Item
          key={index}
          style={{cursor: 'pointer'}}
          onClick={() => {
            news(id)
            setActive(id)
          }}
          disabled={active === id}
        >
          <span className="bg-secondary text-light p-1">
            {normalizeDate(updatedAt)}
          </span>
          <br />
          {title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default NewsList
