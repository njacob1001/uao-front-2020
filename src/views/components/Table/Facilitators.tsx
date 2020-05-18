import React, { FC } from 'react'
import { Table, Typography, Divider } from 'antd'
import { useSelector } from 'react-redux'
import { facilitatorSelector } from 'ducks/facilitators/selectors'
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
      <Title>Facilitadores</Title>
      <Divider />
      <Table columns={columns} dataSource={facilitators} />
    </Block>
  )
}
export default FacilitatorsTable
