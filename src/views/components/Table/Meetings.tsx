import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { allMeetingSelectors } from 'ducks/meeting/selectors'
import moment from 'moment'
import TableTemplate from './MainTemplate'

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
  },
  {
    title: 'Fin',
    dataIndex: 'end',
    key: 'end',
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

  return (
    <TableTemplate
      data={meetings.map(me => ({
        ...me,
        end: moment(new Date(me.end)).format('MM/DD/YY hh:mm a'),
        start: moment(new Date(me.start)).format('MM/DD/YY hh:mm a'),
        emprendedorName: `${me.emprendedor?.names} ${me.emprendedor?.last_names}`,
        facilitadorName: `${me.facilitador?.names} ${me.facilitador?.last_names}`,
        projectName: me.proyecto?.name,
      }))}
      columns={columns}
      title="Ecuentros"
      collection="encuentros"
      createPath="/app/encuentros/create"
      updatePath="/app/encuentros"
    />
  )
}
export default FacilitatorsTable
