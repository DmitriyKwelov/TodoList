import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

const newAxios = axios.create({ baseURL, withCredentials: true })

export default newAxios
