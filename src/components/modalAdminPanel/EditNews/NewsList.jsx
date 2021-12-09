import React, {useState} from 'react'
import {ListGroup} from 'react-bootstrap'
import {listInfo} from '../../../assets/news'

const NewsList = ({news}) => {
  const lastNews = listInfo.slice(0, 5)
  const [active, setActive] = useState(null)

  return (
    <ListGroup variant="flush">
      {lastNews.map(({title, date, id, text}, index) => (
        <ListGroup.Item
          key={index}
          style={{cursor: 'pointer'}}
          onClick={() => {
            news({title, date, id, text})
            setActive(id)
          }}
          disabled={active === id}
        >
          <span className="bg-secondary text-light p-1"> {date}</span> <br />
          {title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default NewsList
