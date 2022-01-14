import {$host, $authHost} from './index'

export const addTariff = async info => {
  const {data} = await $authHost.post('api/tariffs', info)
  return data
}

export const getTariff = async () => {
  const {data} = await $host.get('api/tariffs')
  return data
}

export const getOneTariff = async id => {
  const {data} = await $host.get(`api/tariffs/${id}`)
  return data
}

export const getAdditionalServices = async () => {
  const {data} = await $host.get('api/tariffs/services/price')
  return data
}

export const putTariff = async info => {
  const {data} = await $authHost.put('api/tariffs', info)
  return data
}
