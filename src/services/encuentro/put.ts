import axios, { AxiosPromise } from 'axios'

export const updateEncuentro = (data: any): AxiosPromise<any> => {
  return axios.put(`${process.env.REACT_APP_CMS_URL}/encuentros/${data.id}`, data)
}
