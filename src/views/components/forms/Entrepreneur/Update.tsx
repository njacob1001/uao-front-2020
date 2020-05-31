/* eslint-disable eqeqeq */
import React, { FC, useState, useRef } from 'react'
import { Block } from 'views/components/UI/content'
import { Form, Input, Typography, Divider, Select, DatePicker, Button, Result } from 'antd'
import { updateEntrepreneur } from 'services/entrepreneur'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { entrepreneursSelector } from 'ducks/entrepreneurs/selectors'
import moment from 'moment'

const FacilitatorForm: FC = () => {
  const entrepreneurs = useSelector(entrepreneursSelector)

  const [status, setStatus] = useState('')
  const currentUser = useRef<any>({})
  const history = useHistory()
  const { id } = useParams()
  const initialValues = entrepreneurs.find(f => `${f.id}` === `${id}`)

  const handleSubmit = (values: any): void => {
    currentUser.current = values

    currentUser.current.id = id
    updateEntrepreneur({
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
        title="Hubo en error durante la actualización del emprendedor"
        subTitle="Es posible que algunos datos no sean coherentes, por favor intentalo de nuevo"
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

  console.log(initialValues)
  return (
    <Block flex={1} width="50%" height="100%" margin="0 auto">
      <Typography.Title>Actualizar información</Typography.Title>
      <Divider />
      <Form
        initialValues={{
          ...initialValues,
          birthday: moment(new Date(initialValues.birthday || '')),
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
        <Form.Item label="Código" name="studentCode">
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Tipo"
          name="condition"
          rules={[{ required: true, message: 'Este campo es requerido' }]}>
          <Select>
            <Select.Option value="Egresado">Egresado</Select.Option>
            <Select.Option value="Estudiante">Estudiante</Select.Option>
            <Select.Option value="Otro">Otro</Select.Option>
          </Select>
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
        <Form.Item label="Carrera" name="career">
          <Select>
            <Select.OptGroup key="uno" label="Ingeniería">
              <Select.Option value="Ingeniería informática">Ingeniería informática</Select.Option>
              <Select.Option key="uno-02" value="Ingeniería multimedia">
                Ingeniería multimedia
              </Select.Option>
              <Select.Option key="uno-03" value="Ingeniería mecánica">
                Ingeniería mecánico
              </Select.Option>
              <Select.Option key="uno-04" value="Ingeniería mecatrónica">
                Ingeniería mecatrónica
              </Select.Option>
              <Select.Option key="uno-05" value="Ingeniería industrial">
                Ingeniería industrial
              </Select.Option>
              <Select.Option key="uno-01" value="Ingeniería biomédica">
                Ingeniería biomédica
              </Select.Option>
            </Select.OptGroup>
            <Select.OptGroup key="dos" label="Ciencias Administrativas">
              <Select.Option key="dos-2" value="Administración de empresas">
                Administración de empresas
              </Select.Option>
              <Select.Option value="Comercio y negocios internacionales">
                Comercio y negocios internacionales
              </Select.Option>
              <Select.Option value="Contaduria pública">Contaduria pública</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup key="tres" label="Comunicación y ciencias sociales">
              <Select.Option value="Comunicación social y periodismo">
                Comunicación social y periodismo
              </Select.Option>
              <Select.Option value="Economía">Economía</Select.Option>
            </Select.OptGroup>
            <Select.OptGroup key="cuatro" label="Ciencias básicas">
              <Select.Option value="Administración ambiental">
                Administración ambiental
              </Select.Option>
            </Select.OptGroup>
            <Select.OptGroup key="cinco" label="Humanidades y Arte">
              <Select.Option value="Cine y comunicación digital">
                Cine y comunicación digital
              </Select.Option>
              <Select.Option value="Comunicación publicitaria">
                Comunicación publicitaria
              </Select.Option>
              <Select.Option value="Diseño de la comunicación gráfica">
                Diseño de la comunicación gráfica
              </Select.Option>
            </Select.OptGroup>
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
