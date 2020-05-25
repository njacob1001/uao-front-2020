import React, { FC, useState } from 'react'
import { Table, Typography, Button, Popconfirm, message, Space, Input } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Highlighter from 'react-highlight-words'
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
    // onFilterDropdownVisibleChange: visible => {
    //   if (visible) {
    //     setTimeout(() => this.searchInput.select())
    //   }
    // },
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

  const parsedcolumns = columns.map((cl: any) => ({
    ...cl,
    ...getColumnSearchProps(cl.key),
  }))

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
        columns={parsedcolumns}
        dataSource={data}
      />
    </Block>
  )
}
export default FacilitatorsTable
