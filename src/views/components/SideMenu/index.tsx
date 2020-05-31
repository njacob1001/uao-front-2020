/* eslint-disable react/jsx-wrap-multilines */
import React, { FC } from 'react'
import { Menu } from 'antd'
import { SmallLogo } from 'views/components/UI/Images'
import {
  LogoutOutlined,
  TeamOutlined,
  CommentOutlined,
  RocketOutlined,
  CrownOutlined,
} from '@ant-design/icons'
import { Block } from 'views/components/UI/content'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_SAGA } from 'ducks/user/types'
import { useLocation, Link } from 'react-router-dom'
import { roleSelector } from 'ducks/user/selectors'

const SideBarMenu: FC = () => {
  const dispatch = useDispatch()
  const handleLogout = (): void => {
    dispatch({
      type: LOGOUT_SAGA,
    })
  }
  const { pathname } = useLocation()
  const role = useSelector(roleSelector)
  const isAdmin = role === 'administrador'
  const isEmployee = role === 'administrador' || role === 'facilitador'
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

      <Menu selectedKeys={[pathname]} mode="inline" theme="light">
        <Block height="2rem" />

        {isAdmin && (
          <Menu.Item key="/app/administradores/all">
            <Link to="/app/administradores/all">
              <CrownOutlined />
              <span>Administradores</span>
            </Link>
          </Menu.Item>
        )}
        {isAdmin && (
          <Menu.Item key="/app/facilitators/all">
            <Link to="/app/facilitators/all">
              <TeamOutlined />
              <span>Facilitadores</span>
            </Link>
          </Menu.Item>
        )}
        {isEmployee && (
          <Menu.Item key="/app/emprendedores/all">
            <Link to="/app/emprendedores/all">
              <TeamOutlined />
              <span>Emprendedores</span>
            </Link>
          </Menu.Item>
        )}
        <Menu.Item key="/app/proyectos/all">
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
          <Menu.Item key="/app/encuentros/hoy">
            <Link to="/app/encuentros/hoy">
              <CommentOutlined />
              <span>Hoy</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/app/encuentros/agendados">
            <Link to="/app/encuentros/agendados">
              <CommentOutlined />
              <span>Agendados</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/app/encuentros/realizados">
            <Link to="/app/encuentros/realizados">
              <CommentOutlined />
              <span>Realizados</span>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="logout" onClick={handleLogout}>
          <LogoutOutlined />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SideBarMenu
