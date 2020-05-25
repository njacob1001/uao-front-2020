import axios, { AxiosPromise } from 'axios'

export const deleteProject = (id: string): AxiosPromise<any> => {
  return axios.delete(`${process.env.REACT_APP_CMS_URL}/proyectos/${id}`)
}
