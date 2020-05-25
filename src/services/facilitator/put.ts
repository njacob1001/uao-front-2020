import axios, { AxiosPromise } from 'axios'

export const updateFacilitator = (data: any): AxiosPromise<any> => {
  return axios.put(`${process.env.REACT_APP_CMS_URL}/users/${data.id}`, {
    ...data,
    role: {
      id: 3,
      type: 'facilitator',
      name: 'facilitator',
    },
  })
}
