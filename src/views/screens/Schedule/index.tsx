import React, { FC } from 'react'
import usePrivateRoute from 'hooks/Private/route'
import Header from 'views/components/Header'
import SideMenu from 'views/components/SideMenu'
import { Layout } from 'antd'
import Meetings from 'views/components/Meetings'
import { Switch, Route, Redirect } from 'react-router-dom'
import MeetingDetail from 'views/screens/Meeting'

const { Sider, Content, Footer } = Layout

const Schedule: FC = () => {
  usePrivateRoute()
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <SideMenu />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0' }}>
          <Switch>
            <Route path="/schedules/meetings">
              <Meetings />
            </Route>
            <Route path="/schedules/detail-meeting/:meeting">
              <MeetingDetail />
            </Route>
            <Route>
              <Redirect to="/schedules/meetings" />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>UAO 2020 Created by Ingesoft</Footer>
      </Layout>
    </Layout>
  )
}

export default Schedule
