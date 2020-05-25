import React, { FC } from 'react'
import { Table, Typography, Divider, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { facilitatorSelector } from 'ducks/facilitators/selectors'
import { Link } from 'react-router-dom'
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
    title: 'Profesión',
    dataIndex: 'profession',
    key: 'profession',
  },
]
const FacilitatorsTable: FC<any> = () => {
  const facilitators = useSelector(facilitatorSelector)

  console.log(facilitators)

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>Facilitadores</Title>
        <Block ml="3rem">
          <Link to="/app/facilitators/create">
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
              Crear
            </Button>
          </Link>
        </Block>
      </Block>
      <Divider />
      <Table columns={columns} dataSource={facilitators} />
    </Block>
  )
}
export default FacilitatorsTable
