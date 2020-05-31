import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { allMeetingSelectors } from 'ducks/meeting/selectors'
import moment from 'moment'
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
]
const FacilitatorsTable: FC<any> = () => {
  const meetings = useSelector(allMeetingSelectors)

  return (
    <TableTemplate
      data={meetings.map((me: any) => ({
        ...me,
        end: moment(new Date(me.end)).format('MM/DD/YY hh:mm a'),
        start: moment(new Date(me.start)).format('MM/DD/YY hh:mm a'),
        emprendedores: me.emprendedores?.length ? me.emprendedores?.length : '0',
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
