import React, {useState, useEffect} from 'react'
import {documents} from '../assets/documents'
import {delay} from '../utils/delay'
import Spinner from '../components/Spinner'
import {Accordion} from 'react-bootstrap'

const Agreement = () => {
  const [isLoading, setLoading] = useState(true)
  const [documentActual, setDocumentActual] = useState()

  //данные с сервера эмитируем
  useEffect(() => {
    delay().then(() => {
      setDocumentActual(documents)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <h2 className="text-center">Договір надання телекомунікаційних послуг</h2>
      <Accordion>
        {documentActual.map(({id, name, text}) => (
          <Accordion.Item key={id} eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>{text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default Agreement
