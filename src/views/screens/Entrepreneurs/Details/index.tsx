import React, { FC, useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { Typography, Spin } from 'antd'
import { Block } from 'views/components/UI/content'
import moment from 'moment'

const { Title, Text, Paragraph } = Typography

const query = (id: string): string => `
    query {
      users(where: {id:${id}}) {
        id
        names
        last_names
        identification
        condition
        email
        birthday
        phone
        address
        proyectos {
          id
          name
          description
          sector
          authors {
            names
            last_names
          }
        }
        asesoriasPendientes: asesorias(where:{estado: "pendiente"}){
          id
          asunto
          description
          start
          end
          proyecto{
            name
          }
          emprendedores {
            names
            last_names
          }
          facilitador{
          names
            last_names

        }
        }

        asesoriasRealizadas: asesorias(where:{estado: "completado"}){
          id
          asunto
          description
          start
          end
          proyecto{
            name
          }
          emprendedores {
            names
            last_names
          }
          facilitador{
          names
            last_names

        }
        }
      }
    }
`

const ContentDetail: FC = () => {
  const [data, setData] = useState<any>({ data: {}, loading: false, error: '' })
  const { id = '0' } = useParams()
  useEffect(() => {
    setData({
      ...data,
      loading: false,
    })
    Axios.post(`${process.env.REACT_APP_CMS_URL}/graphql`, {
      query: query(id),
    })
      .then(res => {
        if (res?.data?.data?.users[0]) {
          setData({
            data: res?.data?.data?.users[0],
            loading: false,
          })
        }
      })
      .catch(err => {
        setData({
          ...data,
          error: 'Algo salió mal, intentalo mas tarde',
          loading: false,
        })
      })
  }, [])

  console.log(data)

  if (data.loading)
    return (
      <Block width="100%" height="500px" display="flex" justifyContent="center" alignItems="center">
        <Spin />
      </Block>
    )

  return (
    <Block width="100%" display="flex" flexDirection="column">
      <Title level={2}>Informacion personal</Title>
      <Text>
        <Text strong>Nombre completo: </Text>
        <Text>{`${data?.data?.names} ${data?.data?.last_names}`}</Text>
      </Text>
      <Text>
        <Text strong>Cédula: </Text>
        <Text>{data?.data?.identification}</Text>
      </Text>
      <Text>
        <Text strong>Tipo de emprendedor: </Text>
        <Text>{data?.data?.condition}</Text>
      </Text>
      <Text>
        <Text strong>Email: </Text>
        <Text>{data?.data?.email}</Text>
      </Text>
      {data?.data?.birthday ? (
        <Text>
          <Text strong>Fecha de nacimiento: </Text>
          <Text>
            <Text>{moment(data?.data?.birthday).format('DD [de] MMMM [de] YYYY')}</Text>
            <Text> (</Text>
            <Text>{moment().diff(data?.data?.birthday, 'years', false)}</Text>
            <Text> Años)</Text>
          </Text>
        </Text>
      ) : null}
      <Text>
        <Text strong>Celular: </Text>
        <Text>{data?.data?.phone}</Text>
      </Text>
      <Text>
        <Text strong>Dirección: </Text>
        <Text>{data?.data?.address}</Text>
      </Text>
      <Title level={2}>Proyectos</Title>
      {data?.data?.proyectos?.length ? (
        data?.data?.proyectos?.map((proyecto: any) => (
          <Block my="1rem" bg="white" key={`pro${proyecto.id}`} p="2rem">
            <Title level={4}>{proyecto.name}</Title>
            <Paragraph>{proyecto.description}</Paragraph>
            <Text>
              <Text strong>Autores: </Text>
              <Text>
                {proyecto?.authors
                  ?.map((author: any) => `${author.names} ${author.last_names}`)
                  .join(', ')}
              </Text>
            </Text>
          </Block>
        ))
      ) : (
        <Text>Ninguno</Text>
      )}
      <Title level={2}>Encuentros pendientes</Title>
      {data?.data?.asesoriasPendientes?.length ? (
        data?.data?.asesoriasPendientes?.map((asesoria: any) => (
          <Block my="1rem" bg="white" key={`asesoria${asesoria.id}`} p="2rem">
            <Title level={4}>{asesoria.asunto}</Title>
            <Paragraph>{asesoria.description}</Paragraph>
            <Text>
              <Text strong>Fecha y hora: </Text>
              <Text>{moment(asesoria.start).format('dddd DD [de] MMMM [de] YYYY - hh:mm a')}</Text>
              <Text> hasta las </Text>
              <Text>{moment(asesoria.end).format('hh:mm a')}</Text>
            </Text>
            <br />
            <Text>
              <Text strong>Participantes: </Text>
              <Text>
                {asesoria?.emprendedores
                  ?.map((author: any) => `${author.names} ${author.last_names}`)
                  .join(', ')}
              </Text>
            </Text>
            <br />
            <Text>
              <Text strong>Facilitador: </Text>
              <Text>{`${asesoria?.facilitador?.names} ${asesoria?.facilitador?.last_names}`}</Text>
            </Text>
            <br />
            <Text>
              <Text strong>Proyecto: </Text>
              <Text>{asesoria?.proyecto?.name}</Text>
            </Text>
          </Block>
        ))
      ) : (
        <Text>Ninguno</Text>
      )}
      <Title level={2}>Encuentros Realizados</Title>
      {data?.data?.asesoriasRealizadas?.length ? (
        data?.data?.asesoriasRealizadas?.map((asesoria: any) => (
          <Block my="1rem" bg="white" key={`asesorisa${asesoria.id}`} p="2rem">
            <Title level={4}>{asesoria.asunto}</Title>
            <Paragraph>{asesoria.description}</Paragraph>
            <Text>
              <Text strong>Fecha y hora: </Text>
              <Text>{moment(asesoria.start).format('dddd DD [de] MMMM [de] YYYY - hh:mm a')}</Text>
              <Text> hasta las </Text>
              <Text>{moment(asesoria.end).format('hh:mm a')}</Text>
            </Text>
            <br />
            <Text>
              <Text strong>Participantes: </Text>
              <Text>
                {asesoria?.emprendedores
                  ?.map((author: any) => `${author.names} ${author.last_names}`)
                  .join(', ')}
              </Text>
            </Text>
            <br />
            <Text>
              <Text strong>Facilitador: </Text>
              <Text>{`${asesoria?.facilitador?.names} ${asesoria?.facilitador?.last_names}`}</Text>
            </Text>
            <br />
            <Text>
              <Text strong>Proyecto: </Text>
              <Text>{asesoria?.proyecto?.name}</Text>
            </Text>
          </Block>
        ))
      ) : (
        <Text>Ninguno</Text>
      )}
    </Block>
  )
}

export default ContentDetail
