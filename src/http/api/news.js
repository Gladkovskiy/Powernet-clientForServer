import {$host, $authHost} from './index'

export const addNews = async info => {
  const {data} = await $authHost.post('api/news', info)
  return data
}

export const getNews = async (page, limit) => {
  const {data} = await $host.get('api/news', {params: {page, limit}})
  return data
}

export const getOneNews = async id => {
  const {data} = await $host.get(`api/news/${id}`)
  return data
}