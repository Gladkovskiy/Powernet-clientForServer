import {$host, $authHost} from './index'

export const addUser = async info => {
  const {data} = await $authHost.post('api/user', info)
  return data
}

export const getOneUser = async id => {
  const {data} = await $host.get(`api/user`, {params: {id}})
  return data
}

export const putUser = async info => {
  const {data} = await $authHost.put('api/user', info)
  return data
}

export const deleteUser = async id => {
  const {data} = await $authHost.delete('api/user', {params: id})
  return data
}
