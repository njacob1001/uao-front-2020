import React, { FC, useState, useRef, useEffect } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Select, Button, Result } from 'antd'
import { getAll } from 'services/entrepreneur'
import { createProject } from 'services/projects'
import { useHistory, useParams } from 'react-router-dom'
import { ProjectSelector } from 'ducks/projects/selectors'
import { useSelector } from 'react-redux'

const FacilitatorForm: FC = () => {
  const [status, setStatus] = useState('')

  const [emprendedores, setEmprendedores] = useState([])
  const projects = useSelector(ProjectSelector)
  const currentUser = useRef<any>({})
  const { id } = useParams()
  const history = useHistory()
  const initialValues = projects.find(f => `${f.id}` === `${id}`)
  const handleSubmit = (values: any): void => {
    currentUser.current = values

    createProject({
      ...values,
      emprendedor: {
        id: values.emprendedor,
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
    getAll()
      .then(res => {
        if (res.data?.data?.users?.length) {
          setEmprendedores(res.data?.data?.users)
        }
      })
      .catch(() => {
        console.log('error')
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
        title="Hubo en error durante la creación del emprendedor"
        subTitle="Verifica que los datos sean correctos"
        extra={button}
      />
    )
  }
  if (!initialValues) return null

  if (status === 'finished') {
    return (
      <Result
        status="success"
        title="Proyecto creado exitosamente"
        subTitle={`El proyecto: ${currentUser.current.name} fue creado con el ID: ${currentUser.current.id}`}
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

  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Nuevo Proyecto</Typography.Title>
      <Divider />
      <Form
        initialValues={{ ...initialValues, emprendedor: initialValues?.emprendedor.id }}
        onFinish={handleSubmit}
        layout="vertical">
        <Form.Item
          label="Título del proyecto"
          name="name"
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
          label="Sector"
          name="sector"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select>
            <Select.Option value="Salud">Salud</Select.Option>
            <Select.Option value="Educación">Educación</Select.Option>
            <Select.Option value="Cultura">Cultura</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Emprendedor asociado"
          name="emprendedor"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select showSearch filterOption={handleSearch}>
            {emprendedores.map((usr: any) => (
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
export default FacilitatorForm
