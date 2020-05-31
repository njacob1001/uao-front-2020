import React, { FC, useState, useRef } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Button, Result } from 'antd'
import { createAdmin, updateAdmin } from 'services/administrator'
import { useHistory } from 'react-router-dom'

const AdministratorForm: FC = () => {
  const [status, setStatus] = useState('')
  const currentUser = useRef<any>({})
  const history = useHistory()
  const handleSubmit = (values: any): void => {
    currentUser.current = values
    createAdmin({
      provider: 'local',
      username: values.email.split('@')[0],
      email: values.email,
      password: values.identification,
    })
      .then(({ data: userData }: any) => {
        if (userData.user) {
          const userId = userData.user.id
          currentUser.current.id = userId
          updateAdmin({
            id: userId,
            ...values,
          })
            .then(() => {
              setStatus('finished')
            })
            .catch(() => {
              setStatus('error')
            })
        }
      })
      .catch(() => {
        setStatus('error')
      })
  }

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
        title="Hubo en error durante la creación del administrador"
        subTitle="Es posible que ya exista un usuario con los el mismos datos"
        extra={button}
      />
    )
  }

  if (status === 'finished') {
    return (
      <Result
        status="success"
        title="Usuario creado exitosamente"
        subTitle={`El usuario: ${currentUser.current.names} ${currentUser.current.last_names} fue creado con el ID: ${currentUser.current.id}`}
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

  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Nuevo Administrador</Typography.Title>
      <Divider />
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Nombres"
          name="names"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellidos"
          name="last_names"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Cédula"
          name="identification"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Correo"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Correo no válido',
            },
            {
              required: true,
              message: 'Profavor ingresa tu correo electrónico',
            },
          ]}>
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Celular"
          name="phone"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input type="number" maxLength={10} />
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
export default AdministratorForm
