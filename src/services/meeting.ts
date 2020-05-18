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
          emprendedor {
            names
            last_names
          }
          facilitador {
            names
            last_names
          }
          proyecto {
            name
          }
        }
      }
    `,
  })
}

export const getMeetings = (userID: number, role: string): Promise<any> => {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_CMS_URL}/graphql`,
    data: {
      query: `
   query {
     meetings(where: {${role}:{id:${userID}}}) {
       subject
       description
       start
       end
       id
       state
       consultor {
        name
        last_name
        photo {
          url
          }
        }
        emprendedor {
          name
          last_name
          photo {
            url
            }
        }
     }
   }
 `,
    },
  })
}
