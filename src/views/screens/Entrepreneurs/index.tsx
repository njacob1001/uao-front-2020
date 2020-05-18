import React, { FC, useEffect } from 'react'
import Header from 'views/components/Header'
import SideMenu from 'views/components/SideMenu'
import { Layout } from 'antd'
import EntrepreneursTable from 'views/components/Table/Entrepreneurs'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/entrepreneurs/types'

const { Sider, Content, Footer } = Layout

const Entrepreneurs: FC = () => {
  // usePrivateRoute()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider breakpoint="lg" theme="light" collapsedWidth="0">
        <SideMenu />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <Switch>
            <Route path="/entrepreneurs/all">
              <EntrepreneursTable />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>UAO 2020 Created by Ingesoft</Footer>
      </Layout>
    </Layout>
  )
}

export default Entrepreneurs
