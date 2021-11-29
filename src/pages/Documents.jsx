import React, {useState, useEffect} from 'react'
import {documents} from '../assets/documents'
import {delay} from '../utils/delay'
import Spinner from '../components/Spinner'

const Documents = () => {
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

  return <div>DOCUMENT</div>
}

export default Documents
