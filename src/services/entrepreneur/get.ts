import axios, { AxiosPromise } from 'axios'

export const getAll = (): AxiosPromise<any> => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
    query: `
      query {
        users(where:{role:{name:"emprendedor"}}) {
          id
          names
          last_names
          email
          identification
          phone
          photo {url}
          address
          birthday
          profession
          carrera {
            name
          }
        }
      }
    `,
  })
}