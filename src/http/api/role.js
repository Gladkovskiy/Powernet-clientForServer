import {$host} from './index'

export const getRole = async () => {
  const {data} = await $host.get('/role')
  return data
}
