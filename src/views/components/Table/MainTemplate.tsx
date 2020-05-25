import React, { FC, useState } from 'react'
import { Table, Typography, Button, Popconfirm, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Block } from '../UI/content'

const { Title } = Typography

const FacilitatorsTable: FC<any> = ({
  columns,
  data,
  title,
  collection,
  createPath,
  updatePath,
}) => {
  const [selected, setSelected] = useState([])
  const onSelectChange = (selectedRowKeys: any): void => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelected(selectedRowKeys)
  }
  const history = useHistory()
  const handleDelete = (): void => {
    const deletePromises: any[] = []
    message.info('Eliminando...')
    selected.forEach(keySelected => {
      deletePromises.push(
        axios.delete(`${process.env.REACT_APP_CMS_URL}/${collection}/${keySelected}`)
      )
    })
    Promise.all(deletePromises)
      .then(() => {
        message.success('Usuarios eliminados correctamente')
      })
      .catch(() => {
        message.error('No se pudieron borrar los usuarios, es posible que tengan agendas asignadas')
      })
  }

  const rowSelection = {
    selectedRowKeys: selected,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  }

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>{title}</Title>
        <Block ml="3rem">
          <Link to={createPath}>
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
              Crear
            </Button>
          </Link>
        </Block>
      </Block>
      <Block height="3rem" display="flex" alignItems="center">
        {selected.length ? (
          <Popconfirm
            title="Eliminar usuarios seleccionados"
            okText="Eliminar"
            cancelText="Cancelar"
            onConfirm={handleDelete}>
            <Button type="primary" danger>
              Eliminar usuarios seleccionados
            </Button>
          </Popconfirm>
        ) : null}
      </Block>
      <Table
        onRow={record => ({
          onDoubleClick: () => {
            history.push(`${updatePath}/update/${record.id}`)
          },
        })}
        rowKey="id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </Block>
  )
}
export default FacilitatorsTable
