import React, { FC } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Select, DatePicker, Button } from 'antd'

const FacilitatorForm: FC = () => {
  const handleSubmit = () => {
    console.log('finished')
  }
  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Nuevo facilitador</Typography.Title>
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
