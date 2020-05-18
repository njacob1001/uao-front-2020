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

const SideBarMenu: FC = () => {
  const dispatch = useDispatch()
  const handleLogout = (): void => {
    dispatch({
      type: LOGOUT_SAGA,
    })
  }
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

      <Menu defaultSelectedKeys={['2']} mode="inline" theme="light">
        <Menu.Item key="">
          <DesktopOutlined />
          <span>Inicio</span>
        </Menu.Item>
        <Menu.Item key="3">
          <TeamOutlined />
          <span>Facilitadores</span>
        </Menu.Item>
        <Menu.Item key="emprendedores">
          <TeamOutlined />
          <span>Emprendedores</span>
        </Menu.Item>
        <Menu.Item key="proyectos">
          <RocketOutlined />
          <span>Proyectos</span>
        </Menu.Item>
        <Menu.Item key="encuentros">
          <CommentOutlined />
          <span>Encuentros</span>
        </Menu.Item>
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
