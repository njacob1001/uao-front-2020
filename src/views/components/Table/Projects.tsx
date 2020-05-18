import React, { FC } from 'react'
import { Table, Typography, Divider, Button } from 'antd'
import { useSelector } from 'react-redux'
import { ProjectSelector } from 'ducks/projects/selectors'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Block } from '../UI/content'

const { Title } = Typography

const columns: any[] = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Sector ',
    dataIndex: 'sector',
    key: 'sector',
  },
  {
    title: 'Emprendedor',
    dataIndex: 'entrepreneurName',
    key: 'entrepreneurName',
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true,
  },
]
const FacilitatorsTable: FC<any> = () => {
  const projects = useSelector(ProjectSelector)

  console.log(projects)

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>Proyectos</Title>
        <Block ml="3rem">
          <Link to="/projects/create">
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
              Crear
            </Button>
          </Link>
        </Block>
      </Block>
      <Divider />
      <Table
        columns={columns}
        dataSource={projects?.map(item => ({
          ...item,
          entrepreneurName: `${item?.entrepreneur?.names} ${item?.entrepreneur?.last_names}`,
        }))}
      />
    </Block>
  )
}
export default FacilitatorsTable
