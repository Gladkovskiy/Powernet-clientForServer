import {$host, $authHost} from './index'

export const addNews = async info => {
  const {data} = await $authHost.post('/news', info)
  return data
}

export const getNews = async (page, limit) => {
  const {data} = await $host.get('/news', {params: {page, limit}})
  return data
}

export const getOneNews = async id => {
  const {data} = await $host.get(`/news/${id}`)
  return data
}

export const putNews = async info => {
  const {data} = await $authHost.put('/news', info)
  return data
}

export const deleteNews = async id => {
  const {data} = await $authHost.delete('/news', {params: id})
  return data
}
