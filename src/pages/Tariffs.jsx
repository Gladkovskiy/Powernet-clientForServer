import React, {useEffect, useState} from 'react'
import TariffsTable from '../components/TariffsTable'
import {tarrifs, additionalServices} from '../assets/tarrifs'
import {delay} from '../utils/pureFunction.js'
import Spinner from '../components/Spinner'
import AdditionalServices from '../components/AdditionalServices'

const Tariffs = () => {
  const [isLoading, setLoading] = useState(true)
  const [tarrifsActual, setTarrifsActual] = useState()
  const [additionalServic, setAdditionalServic] = useState()

  //данные с сервера эмитируем
  useEffect(() => {
    delay().then(() => {
      setTarrifsActual(tarrifs)
      setAdditionalServic(additionalServices)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Spinner />

  return (
    <>
      <TariffsTable tarrifsActual={tarrifsActual} />
      <AdditionalServices additionalServic={additionalServic} />
    </>
  )
}

export default Tariffs
