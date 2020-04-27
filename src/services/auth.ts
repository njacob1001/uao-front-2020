import axios from 'axios'

interface Credentials {
  identifier: string
  password: string
}

export const loginRequest = (data: Credentials) => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/auth/local`, data)
}
