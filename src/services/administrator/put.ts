import axios, { AxiosPromise } from 'axios'

export const updateAdmin = (data: any): AxiosPromise<any> => {
  return axios.put(`${process.env.REACT_APP_CMS_URL}/users/${data.id}`, {
    ...data,
    role: {
      id: 5,
      type: 'administrador',
      name: 'administrador',
    },
  })
}
