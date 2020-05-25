import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { entrepreneursSelector } from 'ducks/entrepreneurs/selectors'
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
    title: 'Carrera',
    dataIndex: 'career',
    key: 'career',
  },
]
const FacilitatorsTable: FC<any> = () => {
  const entrepreneurs = useSelector(entrepreneursSelector)

  return (
    <TableTemplate
      data={entrepreneurs}
      columns={columns}
      title="Emprendedores"
      collection="users"
      createPath="/app/emprendedores/create"
      updatePath="/app/emprendedores"
    />
  )
}
export default FacilitatorsTable
