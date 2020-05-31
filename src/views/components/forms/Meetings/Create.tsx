/* eslint-disable eqeqeq */
import React, { FC, useState, useRef, useEffect } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Select, Button, Result, DatePicker, Switch } from 'antd'
import { getAll } from 'services/entrepreneur'
import { getAll as getFacilitators } from 'services/facilitator'
import { createEncuentro } from 'services/encuentro'
import { createProject, getAll as getProjects } from 'services/projects'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

const CreateMeetingForm: FC = () => {
  const [status, setStatus] = useState('')

  const [emprendedores, setEmprendedores] = useState([])
  const [facilitadores, setFacilitadores] = useState([])
  const [projects, setProjects] = useState([])

  const currentUser = useRef<any>({})
  const history = useHistory()
  const handleSubmit = (values: any): void => {
    currentUser.current = values

    console.log(values)
    console.log(`${values.start.format()}`)

    createEncuentro({
      ...values,
      end: moment(values.start)
        .add(values?.duration, 'minutes')
        .format(),
      start: values.start.format(),
      facilitador: {
        id: values.facilitador,
      },
      emprendedores: values?.emprendedores?.map((item: any) => ({
        id: item,
      })),
      proyecto: {
        id: values.proyecto,
      },
    })
      .then(({ data }: any) => {
        console.log(data)
        const projectId = data.id
        currentUser.current.id = projectId
        setStatus('finished')
      })
      .catch(err => {
        console.log(err)
        setStatus('error')
      })
  }

  useEffect(() => {
    getAll().then(res => {
      if (res.data?.data?.users?.length) {
        setEmprendedores(res.data?.data?.users)
      }
    })
    getFacilitators().then(res => {
      if (res.data?.data?.users?.length) {
        setFacilitadores(res.data?.data?.users)
      }
    })
  }, [])

  const createMore = (): void => {
    setStatus('')
  }

  const goToList = (): void => {
    history.go(-1)
  }

  if (status === 'error') {
    const button = (
      <Button onClick={goToList} type="primary" key="console">
        Volver atrás
      </Button>
    )
    return (
      <Result
        status="warning"
        title="Hubo en error durante la creación del encuentro"
        subTitle="Verifica que los datos sean correctos"
        extra={button}
      />
    )
  }

  if (status === 'finished') {
    return (
      <Result
        status="success"
        title="Encuentro agendado exitosamente"
        subTitle={`El encuentro para el proyecto ${(projects as any).find(
          (pr: any) => pr.id == currentUser.current.proyecto
        )?.name || ''} fue creado con el facilitador ${
          (facilitadores as any).find((fa: any) => fa.id == currentUser.current.facilitador)?.names
        }`}
        extra={[
          <Button onClick={goToList} type="primary" key="console">
            Hecho
          </Button>,
          <Button onClick={createMore} key="buy">
            Seguir Creando
          </Button>,
        ]}
      />
    )
  }

  const handleSearch = (val: any): any => {
    if (+val > 0) {
      return !!emprendedores.find((em: any) => `${em.studentCode}`.includes(`${val}`))
    }
    return !!emprendedores.find((em: any) => `${em.names} ${em.last_names}`.includes(`${val}`))
  }

  const handleEmtrepreneurSelect = (e: any) => {
    // console.log(e)
    getProjects(e).then(res => {
      if (res.data?.data?.proyectos?.length) {
        setProjects(res.data?.data?.proyectos)
      }
    })
  }

  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Crear encuentro</Typography.Title>
      <Divider />
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Asunto"
          name="asunto"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripción"
          name="description"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Fecha y hora"
          name="start"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <DatePicker
            format="YYYY-MM-DD HH:mm"
            showTime={{
              use12Hours: false,
              format: 'HH:mm',
              minuteStep: 15,
            }}
          />
        </Form.Item>

        <Form.Item
          label="Duración"
          name="duration"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select>
            <Select.Option value="30">30 minutos</Select.Option>
            <Select.Option value="45">45 minutos</Select.Option>
            <Select.Option value="60">1 hora</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Es virtual" name="virtual">
          <Switch />
        </Form.Item>

        <Form.Item
          label="Lugar"
          name="lugar"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Asistentes"
          name="emprendedores"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select
            onSelect={handleEmtrepreneurSelect}
            showSearch
            filterOption={handleSearch}
            mode="multiple">
            {emprendedores.map((usr: any) => (
              <Select.Option key={`usr-${usr.id}`} value={usr.id}>
                {`${usr.names} ${usr.last_names}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Proyecto"
          name="proyecto"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select showSearch filterOption={handleSearch}>
            {projects.map((usr: any) => (
              <Select.Option key={`usr-${usr.id}`} value={usr.id}>
                {`${usr.name}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Facilitador"
          name="facilitador"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select showSearch filterOption={handleSearch}>
            {facilitadores.map((usr: any) => (
              <Select.Option key={`usr-${usr.id}`} value={usr.id}>
                {`${usr.names} ${usr.last_names}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Block>
  )
}
export default CreateMeetingForm
