import React, { FC, useState } from 'react'
import { Table, Typography, Button, Popconfirm, message, Space, Input } from 'antd'
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Highlighter from 'react-highlight-words'
import { useSelector } from 'react-redux'
import { roleSelector } from 'ducks/user/selectors'
import { Block } from '../UI/content'

const { Title } = Typography

const FacilitatorsTable: FC<any> = ({
  columns,
  data,
  title,
  collection,
  createPath,
  updatePath,
  hasDetail,
  refresh,
}) => {
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState({
    searchText: '',
    searchedColumn: '',
  })
  const onSelectChange = (selectedRowKeys: any): void => {
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
        message.success('Elementos eliminados correctamente')
        if (refresh) {
          refresh()
        }
      })
      .catch(() => {
        message.error('No se pudieron borrar los elementos')
      })
  }
  const role = useSelector(roleSelector)
  // const isAdmin = role === 'administrador'
  const isEmployee = role === 'administrador' || role === 'facilitador'
  const rowSelection = isEmployee
    ? {
        selectedRowKeys: selected,
        onChange: onSelectChange,
        hideDefaultSelections: true,
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }
    : undefined

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any): void => {
    confirm()
    setSearch({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    })
  }

  const handleReset = (clearFilters: any): void => {
    clearFilters()
    setSearch({ ...search, searchText: '' })
  }

  const getColumnSearchProps = (dataIndex: any): any => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any): any => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="search"
          value={selectedKeys[0]}
          onChange={(e: any): any => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={(): any => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={(): any => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Buscar
          </Button>
          <Button onClick={(): any => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Limpiar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any): any => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any): any =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),

    render: (text: any): any =>
      search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  })

  const parsedcolumns = columns.map((cl: any) =>
    cl.render
      ? {
          ...cl,
          ...getColumnSearchProps(cl.key),
          render: cl.render,
        }
      : {
          ...cl,
          ...getColumnSearchProps(cl.key),
        }
  )

  return (
    <Block flex={1}>
      <Block display="flex" alignItems="center">
        <Title style={{ marginBottom: 0 }}>{title}</Title>
        {isEmployee && (
          <Block ml="3rem" display="flex" flexDirection="row">
            <Link to={createPath}>
              <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
                Crear
              </Button>
            </Link>
            {selected.length === 1 ? (
              <Block ml="1.2rem">
                <Button
                  icon={<EditOutlined />}
                  shape="round"
                  size="large"
                  type="primary"
                  onClick={() => {
                    history.push(`${updatePath}/update/${selected[0]}`)
                  }}>
                  Editar
                </Button>
              </Block>
            ) : null}
            {selected.length ? (
              <Block ml="1.2rem">
                <Popconfirm
                  title="Esta acción es permanente"
                  okText="Eliminar"
                  okButtonProps={{ danger: true }}
                  cancelText="Cancelar"
                  onConfirm={handleDelete}>
                  <Button
                    icon={<DeleteOutlined />}
                    type="primary"
                    danger
                    shape="round"
                    size="large">
                    {`Eliminar ${selected.length}`}
                  </Button>
                </Popconfirm>
              </Block>
            ) : null}
          </Block>
        )}
      </Block>
      <Block height="2rem">
        <span />
      </Block>
      <Table
        onRow={record => ({
          onDoubleClick: () => {
            if (hasDetail) {
              history.push(`${updatePath}/detalles/${record.id}`)
            }
          },
        })}
        rowKey="id"
        rowSelection={rowSelection}
        columns={parsedcolumns}
        dataSource={data}
      />
    </Block>
  )
}
export default FacilitatorsTable
