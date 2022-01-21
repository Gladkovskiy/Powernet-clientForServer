import {$host, $authHost} from './index'

export const addTariff = async info => {
  const {data} = await $authHost.post('/tariffs', info)
  return data
}

export const getTariff = async () => {
  const {data} = await $host.get('/tariffs')
  return data
}

export const getOneTariff = async id => {
  const {data} = await $host.get(`/tariffs/${id}`)
  return data
}

export const getAdditionalServices = async () => {
  const {data} = await $host.get('/tariffs/services/price')
  return data
}

export const putTariff = async info => {
  const {data} = await $authHost.put('/tariffs', info)
  return data
}
