import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { facilitatorSelector } from 'ducks/facilitators/selectors'
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

  return (
    <TableTemplate
      data={facilitators}
      columns={columns}
      title="Facilitadores"
      collection="users"
      createPath="/app/facilitators/create"
      updatePath="/app/facilitators"
    />
  )
}
export default FacilitatorsTable
