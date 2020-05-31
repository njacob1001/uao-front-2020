/* eslint-disable eqeqeq */
import React, { FC, useState, useRef } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Select, DatePicker, Button, Result } from 'antd'
import { createFacilitator, updateFacilitator } from 'services/facilitator'
import { useHistory, useParams } from 'react-router-dom'
import { facilitatorSelector } from 'ducks/facilitators/selectors'
import { useSelector } from 'react-redux'
import moment from 'moment'

const FacilitatorForm: FC = () => {
  const facilitators = useSelector(facilitatorSelector)

  const [status, setStatus] = useState('')
  const currentUser = useRef<any>({})
  const history = useHistory()
  const { id } = useParams()
  const initialValues = facilitators.find(f => `${f.id}` === `${id}`)

  const handleSubmit = (values: any): void => {
    currentUser.current = values

    currentUser.current.id = id
    updateFacilitator({
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
        title="Hubo en error durante la actualización del facilitador"
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
  const { busy, ...filterInitialData } = initialValues

  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Actualizar información</Typography.Title>
      <Divider />
      <Form
        initialValues={{
          ...filterInitialData,
          birthday: moment(new Date(filterInitialData.birthday || '')),
        }}
        onFinish={handleSubmit}
        layout="vertical">
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
          label="Profesión"
          name="profession"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select>
            <Select.Option value="Ingeniero de sistemas">Ingeniero de sistemas</Select.Option>
            <Select.Option value="Administrador ambiental">Administrador ambiental</Select.Option>
            <Select.Option value="Ingeniero multimedia">Ingeniero multimedia</Select.Option>
            <Select.Option value="Ingeniero mecánico">Ingeniero de mecánico</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Conocimientos"
          name="knowledges"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select mode="tags">
            <Select.Option value="Seguridad informática">Seguridad informática</Select.Option>
            <Select.Option value="Experiencia de usuario">Experiencia de usuario</Select.Option>
            <Select.Option value="Diseño de interacciones">Diseño de interacciones</Select.Option>
            <Select.Option value="Formulación de proyectos">Formulación de proyectos</Select.Option>
            <Select.Option value="Gerencia de proyectos">Gerencia de proyectos</Select.Option>
            <Select.Option value="Contabilidad">Contabilidad</Select.Option>
            <Select.Option value="Análisis de riesgos">Analisis de riesgos</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Celular"
          name="phone"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Input type="number" maxLength={10} />
        </Form.Item>
        <Form.Item label="Dirección" name="address">
          <Input />
        </Form.Item>
        <Form.Item
          label="Fecha de nacimiento"
          name="birthday"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <DatePicker />
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
