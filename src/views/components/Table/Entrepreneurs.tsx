import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { entrepreneursSelector } from 'ducks/entrepreneurs/selectors'
import moment from 'moment'
import TableTemplate from './MainTemplate'

const columns: any[] = [
  {
    title: 'Estado',
    dataIndex: 'condition',
    key: 'condition',
  },
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
    title: 'Carrera',
    dataIndex: 'career',
    key: 'career',
  },
  {
    title: 'Proyectos',
    dataIndex: 'proyectos',
    key: 'proyectos',
  },
]
const FacilitatorsTable: FC<any> = () => {
  const entrepreneurs = useSelector(entrepreneursSelector)

  return (
    <TableTemplate
      data={entrepreneurs?.map((item: any) => ({
        ...item,
        proyectos: item.proyectos?.length || 'Ninguno',
        birthday: item.birthday ? moment().diff(item.birthday, 'years', false) : 'N/A',
      }))}
      columns={columns}
      title="Emprendedores"
      collection="users"
      createPath="/app/emprendedores/create"
      updatePath="/app/emprendedores"
    />
  )
}
export default FacilitatorsTable
