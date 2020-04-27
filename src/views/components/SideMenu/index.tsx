/* eslint-disable react/jsx-wrap-multilines */
import React, { FC } from 'react'
import { Menu } from 'antd'
import { SmallLogo } from 'views/components/UI/Images'
import { LogoutOutlined, DesktopOutlined, UnorderedListOutlined } from '@ant-design/icons'
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
      <Block display="flex" justifyContent="center" alignItems="center" height="4.125rem">
        <SmallLogo src="https://i.imgur.com/RFJPfyp.png" />
      </Block>
      <Menu defaultSelectedKeys={['2']} mode="inline" theme="dark">
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Meetings</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UnorderedListOutlined />
          <span>Task</span>
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
