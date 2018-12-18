import axios from 'axios'

export const http = axios.create({
    baseURL: process.env.apiUrl,
    headers: {
      Authorization: 'Bearer {token}'
    }
  })