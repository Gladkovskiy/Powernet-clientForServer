import {$host, $authHost} from './index'

export const login = async info => {
  const {data} = await $host.post('api/login', info)
  return data
}

export const auth = async () => {
  const {data} = await $authHost.get('api/login')
  return data
}
