import React, { FC, useEffect } from 'react'
import Header from 'views/components/Header'
import SideMenu from 'views/components/SideMenu'
import { Layout } from 'antd'
import FacilitatorsTable from 'views/components/Table/Facilitators'
import CreateFacilitatorForm from 'views/components/forms/Facilitator/Create'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/facilitators/types'

const { Sider, Content, Footer } = Layout

const Facilitators: FC = () => {
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
            <Route path="/facilitators/all">
              <FacilitatorsTable />
            </Route>
            <Route path="/facilitators/create">
              <CreateFacilitatorForm />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>UAO 2020 Created by Ingesoft</Footer>
      </Layout>
    </Layout>
  )
}

export default Facilitators
