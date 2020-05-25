/* eslint-disable react/jsx-wrap-multilines */
import React, { FC } from 'react'
import { Menu } from 'antd'
import { SmallLogo } from 'views/components/UI/Images'
import {
  LogoutOutlined,
  DesktopOutlined,
  TeamOutlined,
  SolutionOutlined,
  CommentOutlined,
  RocketOutlined,
} from '@ant-design/icons'
import { Block } from 'views/components/UI/content'
import { useDispatch } from 'react-redux'
import { LOGOUT_SAGA } from 'ducks/user/types'
import { useLocation, Link } from 'react-router-dom'

const SideBarMenu: FC = () => {
  const dispatch = useDispatch()
  const handleLogout = (): void => {
    dispatch({
      type: LOGOUT_SAGA,
    })
  }
  const { pathname } = useLocation()

  return (
    <>
      <Block
        bg="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="4.125rem">
        <SmallLogo src="https://i.imgur.com/Mbnw2Hq.png" />
      </Block>

      <Menu
        selectedKeys={[pathname.split('/')[1]]}
        defaultSelectedKeys={['inicio']}
        mode="inline"
        theme="light">
        <Block height="2rem" />
        <Menu.Item key="inicio">
          <DesktopOutlined />
          <span>Inicio</span>
        </Menu.Item>

        <Menu.Item key="facilitators">
          <Link to="/app/facilitators/all">
            <TeamOutlined />
            <span>Facilitadores</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="entrepreneurs">
          <Link to="/app/emprendedores/all">
            <TeamOutlined />
            <span>Emprendedores</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link to="/app/proyectos/all">
            <RocketOutlined />
            <span>Proyectos</span>
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="encuentrosgroup"
          title={
            <span>
              <CommentOutlined />
              <span>Encuentros</span>
            </span>
          }>
          <Menu.Item key="meetingsall">
            <Link to="/app/meetings/all">
              <CommentOutlined />
              <span>Hoy</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="meetingspending">
            <Link to="/app/meetings/all">
              <CommentOutlined />
              <span>Pendientes</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="meetingssheduled">
            <Link to="/app/meetings/all">
              <CommentOutlined />
              <span>Agendados</span>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="actividades">
          <SolutionOutlined />
          <span>Actividades</span>
        </Menu.Item>
        <Menu.Item key="logout" onClick={handleLogout}>
          <LogoutOutlined />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SideBarMenu
