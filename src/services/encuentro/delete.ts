import axios, { AxiosPromise } from 'axios'

export const deleteEncuentro = (id: string): AxiosPromise<any> => {
  return axios.delete(`${process.env.REACT_APP_CMS_URL}/encuentros/${id}`)
}
