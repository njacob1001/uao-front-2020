import React, { FC } from 'react'
import { Table, Typography, Divider, Button } from 'antd'
import { useSelector } from 'react-redux'
import { entrepreneursSelector } from 'ducks/entrepreneurs/selectors'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Block } from '../UI/content'

const { Title } = Typography

const columns: any[] = [
  {
    title: 'Nombres',
    dataIndex: 'names',
    key: 'names',
  },
  {
    title: 'Apellidos ',
    dataIndex: 'last_names',
    key: 'last_names',
  },
  {
    title: 'Fecha de nacimiento',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: 'Correo',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Carrera',
    dataIndex: 'carrera',
    key: 'carrera',
  },
]
const FacilitatorsTable: FC<any> = () => {
  const entrepreneurs = useSelector(entrepreneursSelector)

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>Emprendedores</Title>
        <Block ml="3rem">
          <Link to="/entrepreneurs/create">
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
              Crear
            </Button>
          </Link>
        </Block>
      </Block>
      <Divider />
      <Table columns={columns} dataSource={entrepreneurs} />
    </Block>
  )
}
export default FacilitatorsTable
