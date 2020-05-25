import axios, { AxiosPromise } from 'axios'

export const updateProject = (data: any): AxiosPromise<any> => {
  return axios.put(`${process.env.REACT_APP_CMS_URL}/proyectos/${data.id}`, data)
}
