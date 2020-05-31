import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { administratorSelector } from 'ducks/admins/selectors'
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
    title: 'Correo',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
]
const AdministratorsTable: FC<any> = () => {
  const admins = useSelector(administratorSelector)

  return (
    <TableTemplate
      data={admins}
      columns={columns}
      title="Administradores"
      collection="users"
      createPath="/app/administradores/crear"
      updatePath="/app/administradores"
    />
  )
}
export default AdministratorsTable
