import React, {useEffect, useState, useRef} from 'react'
import {Card} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {listInfo} from '../assets/news'
import {delay} from '../utils/delay'
import newsImg from '../assets/news.jpg'
import Spinner from '../components/Spinner'

const OneNews = () => {
  const {id} = useParams()
  const [isLoading, setLoading] = useState(true)
  const [news, setNews] = useState()
  //для тогочтобы вставить кусок html  в компонент
  const text = useRef()

  //данные с сервера эмитируем
  useEffect(() => {
    delay().then(() => {
      setNews(listInfo[+id - 1])
      setLoading(false)
      text.current.innerHTML = listInfo[+id - 1].text
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Spinner />

  return (
    <Card className="p-1 shadow">
      <Card.Img variant="top" src={newsImg} className="w-50" />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.date}</Card.Text>
        <Card.Text ref={text}></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default OneNews
