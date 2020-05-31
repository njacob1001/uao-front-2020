import axios, { AxiosPromise } from 'axios'

export const getAll = (): AxiosPromise<any> => {
  return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
    query: `
      query {
        encuentros {
          id
          asunto
          description
          start
          end
          virtual
          lugar
          emprendedores{
            id
            names
            last_names
          }
          facilitador{
            id
            names
            last_names
          }
          proyecto{
            id
            name
          }
        }
      }
    `,
  })
}
