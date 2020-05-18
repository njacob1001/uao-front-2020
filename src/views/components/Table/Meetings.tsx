import React, { FC } from 'react'
import { Table, Typography, Divider, Button } from 'antd'
import { useSelector } from 'react-redux'
import { allMeetingSelectors } from 'ducks/meeting/selectors'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Block } from '../UI/content'

const { Title } = Typography

const columns: any[] = [
  {
    title: 'Asunto',
    dataIndex: 'asunto',
    key: 'asunto',
  },
  {
    title: 'Inicio ',
    dataIndex: 'start',
    key: 'start',
    render: (text: string): any => (
      <Typography.Text>
        <Typography.Text>{moment(new Date(text)).format('MM-DD-YYYY')}</Typography.Text>
        {'   '}
        <Typography.Text strong>{moment(new Date(text)).format('hh:mm a')}</Typography.Text>
      </Typography.Text>
    ),
  },
  {
    title: 'Fin',
    dataIndex: 'end',
    key: 'end',
    render: (text: string): any => (
      <Typography.Text>
        <Typography.Text>{moment(new Date(text)).format('MM-DD-YYYY')}</Typography.Text>
        {'   '}
        <Typography.Text strong>{moment(new Date(text)).format('hh:mm a')}</Typography.Text>
      </Typography.Text>
    ),
  },

  {
    title: 'Emprendedor',
    dataIndex: 'emprendedorName',
    key: 'emprendedorName',
  },
  {
    title: 'Facilitador',
    dataIndex: 'facilitadorName',
    key: 'facilitadorName',
  },
  {
    title: 'Proyecto',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
    width: 400,
    ellipsis: true,
  },
]
const FacilitatorsTable: FC<any> = () => {
  const meetings = useSelector(allMeetingSelectors)
  console.log(meetings)

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>Encuentros</Title>
        <Block ml="3rem">
          <Link to="/meetings/create">
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
              Crear
            </Button>
          </Link>
        </Block>
      </Block>
      <Divider />
      <Table
        columns={columns}
        dataSource={meetings?.map(item => ({
          ...item,
          emprendedorName: `${item.emprendedor?.names} ${item.emprendedor?.last_names}`,
          facilitadorName: `${item.facilitador?.names} ${item.facilitador?.last_names}`,
          projectName: `${item.proyecto?.name}`,
        }))}
      />
    </Block>
  )
}
export default FacilitatorsTable
