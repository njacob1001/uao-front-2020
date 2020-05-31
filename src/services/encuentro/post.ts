import axios, { AxiosPromise } from 'axios'

export const createEncuentro = (data: any): AxiosPromise<any> => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/encuentros`, data)
}
