/* eslint-disable no-nested-ternary */
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { allMeetingSelectors } from 'ducks/meeting/selectors'
import moment from 'moment'
import { Tag } from 'antd'
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
import TableTemplate from './MainTemplate'

const columns: any[] = [
  {
    title: 'Facilitador',
    dataIndex: 'facilitadorName',
    key: 'facilitadorName',
  },
  {
    title: 'Asunto',
    dataIndex: 'asunto',
    key: 'asunto',
  },
  {
    title: 'Inicio ',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: 'Fin',
    dataIndex: 'end',
    key: 'end',
  },

  {
    title: 'Emprendedores',
    dataIndex: 'emprendedores',
    key: 'emprendedores',
  },

  {
    title: 'Proyecto',
    dataIndex: 'projectName',
    key: 'projectName',
  },
  {
    title: 'Lugar',
    dataIndex: 'lugar',
    key: 'lugar',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    render: (text: string) =>
      text === 'completado' ? (
        <Tag icon={<CheckCircleOutlined />} color="success">
          completado
        </Tag>
      ) : text === 'cancelado' ? (
        <Tag icon={<CheckCircleOutlined />} color="error">
          cancelado
        </Tag>
      ) : (
        <Tag icon={<ClockCircleOutlined />} color="default">
          pendiente
        </Tag>
      ),
  },
]
const FacilitatorsTable: FC<any> = ({ title = 'Encuentros', refresh }) => {
  const meetings = useSelector(allMeetingSelectors)

  return (
    <TableTemplate
      data={meetings.map((me: any) => ({
        ...me,
        end: moment(new Date(me.end)).format('DD/MM/YYYY hh:mm a'),
        start: moment(new Date(me.start)).format('dddd DD [de] MMMM hh:mm a'),
        emprendedores: me.emprendedores?.length ? me.emprendedores?.length : '0',
        facilitadorName: `${me.facilitador?.names} ${me.facilitador?.last_names}`,
        projectName: me.proyecto?.name,
      }))}
      columns={columns}
      title={title}
      collection="encuentros"
      createPath="/app/encuentros/create"
      updatePath="/app/encuentros"
      refresh={refresh}
    />
  )
}
export default FacilitatorsTable
