import axios, { AxiosPromise } from 'axios'

export const updateEntrepreneur = (data: any): AxiosPromise<any> => {
  return axios.put(`${process.env.REACT_APP_CMS_URL}/users/${data.id}`, {
    ...data,
    role: {
      id: 4,
      type: 'emprendedor',
      name: 'emprendedor',
    },
  })
}
