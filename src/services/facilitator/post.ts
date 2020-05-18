import axios from 'axios'

export const Create = (data: any) => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/auth/local/register`, { data })
}
