import React, { FC } from 'react'
import { Table, Typography, Divider } from 'antd'
import { useSelector } from 'react-redux'
import { entrepreneursSelector } from 'ducks/entrepreneurs/selectors'
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

  console.log(entrepreneurs)

  return (
    <Block flex={1}>
      <Title>Emprendedores</Title>
      <Divider />
      <Table columns={columns} dataSource={entrepreneurs} />
    </Block>
  )
}
export default FacilitatorsTable
