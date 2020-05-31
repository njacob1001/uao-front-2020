import axios, { AxiosPromise } from 'axios'
import moment from 'moment'

export const getAll = (type?: string): AxiosPromise<any> => {
  let query = `
    query {
      encuentros(sort: "start:ASC") {
        id
        asunto
        description
        start
        end
        virtual
        lugar
        estado
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
  `

  switch (type) {
    case 'today':
      {
        const start = moment()
          .set('hours', 1)
          .format()
        const end = moment()
          .set('hours', 23)
          .format()

        query = `
          query {
            encuentros(sort: "start:ASC", where:{start_gte:"${start}", start_lte:"${end}"}){
              id
              asunto
              description
              start
              end
              virtual
              lugar
              estado
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
        `
      }
      break
    case 'completed':
      query = `
        query {
          encuentros(sort: "start:ASC", where:{estado:"completado"}){
            id
            asunto
            description
            start
            end
            virtual
            lugar
            estado
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
      `

      break
    default:
      break
  }

  return axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
    query,
  })
}
