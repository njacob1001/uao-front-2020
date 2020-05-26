import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { ProjectSelector } from 'ducks/projects/selectors'
import TableTemplate from './MainTemplate'

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

  return (
    <TableTemplate
      data={projects?.map(item => ({
        ...item,
        entrepreneurName: `${item?.emprendedor?.names} ${item?.emprendedor?.last_names}`,
      }))}
      columns={columns}
      title="Proyectos"
      collection="proyectos"
      createPath="/app/proyectos/create"
      updatePath="/app/proyectos"
    />
  )
}
export default FacilitatorsTable
