import React, { FC, useEffect } from 'react'
import Header from 'views/components/Header'
import SideMenu from 'views/components/SideMenu'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/projects/types'
import usePrivateRoute from 'hooks/Private/route'
import { roleSelector } from 'ducks/user/selectors'
import Entrepreneurs from 'views/screens/Entrepreneurs'
import Projects from '../Projects'
import Administradores from '../Administrators'
import CreateProjects from '../Projects/Create'
import UpdateProjects from '../Projects/Update'
import Facilitators from '../Facilitators'
import CreateFacilitators from '../Facilitators/Create'
import UpdateFacilitator from '../Facilitators/Update'
import NotFound from '../NotFound'
import CreateEntrepreneur from '../Entrepreneurs/Create'
import UpdateEntrepreneur from '../Entrepreneurs/Update'
import CreateMeeting from '../Meeting/Create'
import UpdateMeeting from '../Meeting/Update'
import TodayMeetings from '../Meeting/Today'
import MeetingsAgendados from '../Meeting/Scheduled'
import MeetingsCompletados from '../Meeting/Completed'
import CreateAdmin from '../Administrators/Create'
import UpdateAdmin from '../Administrators/Update'

const { Sider, Content, Footer } = Layout

const MainLayout: FC = () => {
  usePrivateRoute()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])

  const role = useSelector(roleSelector)
  const isAdmin = role === 'administrador'
  const isEmployee = role === 'administrador' || role === 'facilitador'

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider breakpoint="lg" theme="light" collapsedWidth="0">
        <SideMenu />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '24px 16px 0', overflow: 'scroll' }}>
          <Switch>
            {isAdmin && (
              <Route path="/app/administradores/all">
                <Administradores />
              </Route>
            )}
            {isAdmin && (
              <Route path="/app/administradores/crear">
                <CreateAdmin />
              </Route>
            )}
            {isAdmin && (
              <Route path="/app/administradores/update/:id">
                <UpdateAdmin />
              </Route>
            )}
            <Route path="/app/proyectos/all">
              <Projects />
            </Route>
            {isEmployee && (
              <Route path="/app/proyectos/create">
                <CreateProjects />
              </Route>
            )}
            {isEmployee && (
              <Route path="/app/proyectos/update/:id">
                <UpdateProjects />
              </Route>
            )}

            <Route path="/app/emprendedores/all">
              <Entrepreneurs />
            </Route>
            {isEmployee && (
              <Route path="/app/emprendedores/create">
                <CreateEntrepreneur />
              </Route>
            )}
            {isEmployee && (
              <Route path="/app/emprendedores/update/:id">
                <UpdateEntrepreneur />
              </Route>
            )}
            <Route path="/app/facilitators/all">
              <Facilitators />
            </Route>
            {isEmployee && (
              <Route path="/app/facilitators/create">
                <CreateFacilitators />
              </Route>
            )}
            {isEmployee && (
              <Route path="/app/facilitators/update/:id">
                <UpdateFacilitator />
              </Route>
            )}
            <Route path="/app/encuentros/hoy">
              <TodayMeetings />
            </Route>
            <Route path="/app/encuentros/agendados">
              <MeetingsAgendados />
            </Route>
            <Route path="/app/encuentros/realizados">
              <MeetingsCompletados />
            </Route>
            {isEmployee && (
              <Route path="/app/encuentros/create">
                <CreateMeeting />
              </Route>
            )}
            {isEmployee && (
              <Route path="/app/encuentros/update/:id">
                <UpdateMeeting />
              </Route>
            )}
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
