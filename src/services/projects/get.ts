import axios, { AxiosPromise } from 'axios'

export const getAll = (filterId?: string): AxiosPromise<any> => {
  if (filterId) {
    return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
      query: `
        query {
          proyectos(where: {authors:{id:${filterId}}}) {
            id
            name
            description
            sector
            status
            authors {
              id
              names
              last_names
            }
          }
        }
      `,
    })
  }

  return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
    query: `
      query {
        proyectos {
          id
          name
          description
          sector
          status
          authors {
            id
            names
            last_names
          }
        }
      }
    `,
  })
}
