import React, { FC, useEffect } from 'react'
import Header from 'views/components/Header'
import SideMenu from 'views/components/SideMenu'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/projects/types'
import usePrivateRoute from 'hooks/Private/route'
import Entrepreneurs from 'views/screens/Entrepreneurs'
import Projects from '../Projects'
import Facilitators from '../Facilitators'
import CreateFacilitators from '../Facilitators/Create'
import UpdateFacilitator from '../Facilitators/Update'
import Meetings from '../Meeting'
import NotFound from '../NotFound'
import CreateEntrepreneur from '../Entrepreneurs/Create'
import UpdateEntrepreneur from '../Entrepreneurs/Update'

const { Sider, Content, Footer } = Layout

const MainLayout: FC = () => {
  usePrivateRoute()
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
            <Route path="/app/projects/all">
              <Projects />
            </Route>
            <Route path="/app/emprendedores/all">
              <Entrepreneurs />
            </Route>
            <Route path="/app/emprendedores/create">
              <CreateEntrepreneur />
            </Route>
            <Route path="/app/emprendedores/update/:id">
              <UpdateEntrepreneur />
            </Route>
            <Route path="/app/facilitators/all">
              <Facilitators />
            </Route>
            <Route path="/app/facilitators/create">
              <CreateFacilitators />
            </Route>
            <Route path="/app/facilitators/update/:id">
              <UpdateFacilitator />
            </Route>
            <Route path="/app/meetings/all">
              <Meetings />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>UAO 2020 Created by IT. Stark</Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
