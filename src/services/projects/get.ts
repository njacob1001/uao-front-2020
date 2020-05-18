import axios, { AxiosPromise } from 'axios'

export const getAll = (): AxiosPromise<any> => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
    query: `
      query {
        proyectos {
          id
          name
          description
          sector
          status
          entrepreneur: emprendedor {
            id
            names
            last_names
          }
        }
      }
    `,
  })
}
