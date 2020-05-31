import React, { FC, useEffect, useRef } from 'react'
import { BlockTheme, Block } from 'views/components/UI/content'
import { Logo } from 'views/components/UI/Images'
import { Typography, Form, Input, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from 'ducks/user/action-types'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import get from 'lodash/get'

const LoginForm: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useRef<any>()
  const pass = useRef<any>()
  const { loading: loadingStatus, error: errorStatus, token: currentToken } = useSelector(
    ({ userReducer: { loading, error, token } }: any) => ({
      loading,
      error,
      token,
    })
  )

  useEffect(() => {
    if (errorStatus) {
      message.error('errorStatus')
    }
  }, [errorStatus])
  const handleLogin = (): void => {
    dispatch(
      LOGIN.trigger({
        user: user?.current?.input?.value,
        password: pass?.current?.input?.value,
      })
    )
  }

  if (currentToken) {
    history.push('/app')
  }

  const handleGoogleLogin = (e: any): void => {
    e.preventDefault()
    window.open(
      `${process.env.REACT_APP_CMS_URL}/connect/google`,
      'popUpWindow',
      'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=yes'
    )
  }

  const receiveDataFromPopup = (data: any): void => {
    if (get(data, 'data.type', '') === 'REGISTRATION') {
      const parts = get(data, 'data.rawUrl', '').match(/([^\?]+)(\?.*)?/)
      const query = parts[2] || ''
      const paths = (parts[1] || '').replace(/^https?:\/\//, '').split('/')
      const provider = paths[2]
      console.log(query, provider)
    }
  }

  useEffect(() => {
    window.addEventListener('message', receiveDataFromPopup, false)

    return (): void => {
      window.removeEventListener('message', receiveDataFromPopup, false)
    }
  }, [])

  return (
    <BlockTheme
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Block display="flex" flexDirection="column" alignItems="center" width="100%">
        <Logo src="https://i.imgur.com/Mbnw2Hq.png" />

        <Block py="1.4rem">
          <Typography.Text strong>INGRESAR</Typography.Text>
        </Block>
        <Block>
          <Form style={{ width: '100%' }} onFinish={handleLogin} layout="vertical">
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Ingrese un correo válido',
                },
                {
                  required: true,
                  message: 'Es necesario un correo',
                },
              ]}>
              <Input ref={user} prefix={<UserOutlined />} placeholder="Correo institucional" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Ingrese su constraseña',
                },
                {
                  min: 4,
                  message: 'minimo 4 caracteres',
                },
              ]}>
              <Input.Password ref={pass} prefix={<LockOutlined />} placeholder="Contraseña" />
            </Form.Item>
            <Form.Item>
              <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                {loadingStatus ? 'Loading ' : 'Ingresar'}
              </Button>
            </Form.Item>
          </Form>
          <Block display="flex" justifyContent="space-between" alignItems="center">
            <Block borderBottom="solid 1px #000" flex={0.4}>
              <span />
            </Block>
            <Block p=".4rem" borderRadius="50%" border="solid 1px #000">
              <span />
            </Block>
            <Block borderBottom="solid 1px #000" flex={0.4}>
              <span />
            </Block>
          </Block>
          <Block my="1rem">
            <Button
              onClick={handleGoogleLogin}
              icon={<GoogleOutlined />}
              style={{ width: '100%' }}
              type="default">
              Ingresar con Google
            </Button>
          </Block>
        </Block>
      </Block>
    </BlockTheme>
  )
}

export default LoginForm
