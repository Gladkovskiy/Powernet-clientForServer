import axios from 'axios'

//запросы без  авторизации
export const $host = axios.create({
  baseURL: '/',
})

//запросы с авторизацией
export const $authHost = axios.create({
  baseURL: '/',
})

const authIntercepter = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authIntercepter)
