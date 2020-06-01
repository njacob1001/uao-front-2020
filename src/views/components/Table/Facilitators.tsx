import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { facilitatorSelector } from 'ducks/facilitators/selectors'
import moment from 'moment'
import TableTemplate from './MainTemplate'

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
    title: 'Edad',
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
const FacilitatorsTable: FC<any> = ({ refresh }) => {
  const facilitators = useSelector(facilitatorSelector)

  return (
    <TableTemplate
      data={facilitators?.map((item: any) => ({
        ...item,
        birthday: item.birthday ? moment().diff(item.birthday, 'years', false) : 'N/A',
      }))}
      columns={columns}
      title="Facilitadores"
      collection="users"
      createPath="/app/facilitators/create"
      updatePath="/app/facilitators"
      refresh={refresh}
    />
  )
}
export default FacilitatorsTable
