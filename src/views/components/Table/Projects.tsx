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
    title: 'Emprendedores',
    dataIndex: 'emprendedores',
    key: 'emprendedores',
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
        emprendedores: item?.authors?.length || '0',
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
