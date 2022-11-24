import axios from 'axios'

export const rappiApi = axios.create({
    baseURL: 'https://uao-socket.herokuapp.com'
})