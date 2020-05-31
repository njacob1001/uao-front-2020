/* eslint-disable eqeqeq */
import React, { FC, useState, useRef } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Button, Result } from 'antd'
import { updateAdmin } from 'services/administrator'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { administratorSelector } from 'ducks/admins/selectors'

const AdministratorForm: FC = () => {
  const administrators = useSelector(administratorSelector)

  const [status, setStatus] = useState('')
  const currentUser = useRef<any>({})
  const history = useHistory()
  const { id } = useParams()
  const initialValues = administrators.find(f => `${f.id}` === `${id}`)

  const handleSubmit = (values: any): void => {
    currentUser.current = values

    currentUser.current.id = id
    updateAdmin({
      id,
      ...values,
    })
      .then(() => {
        setStatus('finished')
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
        title="Hubo en error durante la actualización del administrador"
        subTitle="Es posible que algunos datos no sean correctos, por favor intentalo de nuevo"
        extra={button}
      />
    )
  }

  if (status === 'finished') {
    return (
      <Result
        status="success"
        title="Usuario actualizado exitosamente"
        extra={[
          <Button onClick={goToList} type="primary" key="console">
            Hecho
          </Button>,
          <Button onClick={createMore} key="buy">
            Seguir Editando
          </Button>,
        ]}
      />
    )
  }
  if (!initialValues) return null

  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Actualizar información</Typography.Title>
      <Divider />
      <Form initialValues={initialValues} onFinish={handleSubmit} layout="vertical">
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
