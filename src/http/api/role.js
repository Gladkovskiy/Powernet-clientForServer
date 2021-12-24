import {$host, $authHost} from './index'

export const getRole = async () => {
  const {data} = await $host.get('api/role')
  return data
}
