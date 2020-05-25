import axios, { AxiosPromise } from 'axios'

export const createEntrepreneur = (data: any): AxiosPromise<any> => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/auth/local/register`, data)
}
