import {$host, $authHost} from './index'

export const getTariff = async () => {
  const {data} = await $host.get('api/tariffs')
  return data
}
