import React, { FC, useEffect, useRef } from 'react'
import { BlockTheme, Block } from 'views/components/UI/content'
import { Logo } from 'views/components/UI/Images'
import { Typography, Form, Input, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN } from 'ducks/user/action-types'
import { PrimaryButton } from 'views/components/UI/Buttons'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'

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
  const handleLogin = () => {
    console.log({ user: user?.current?.input?.value, pass: pass?.current?.input?.value })
    dispatch(
      LOGIN.trigger({
        user: user?.current?.input?.value,
        password: pass?.current?.input?.value,
      })
    )
  }
  if (currentToken) {
    history.push('/facilitators/all')
  }

  return (
    <BlockTheme height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Block
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90vw"
        maxWidth="27rem">
        <Logo src="https://i.imgur.com/RFJPfyp.png" />
        <Block py="0.3rem">
          <Typography.Text>SINAPSIS</Typography.Text>
        </Block>
        <Block py="1.4rem">
          <Typography.Text strong>INGRESAR</Typography.Text>
        </Block>
        <Block>
          <Form onFinish={handleLogin} layout="vertical">
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
              <PrimaryButton type="primary" htmlType="submit">
                {loadingStatus ? 'Loading ' : 'Ingresar'}
              </PrimaryButton>
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
              icon={<GoogleOutlined />}
              style={{ width: '100%' }}
              type="default"
              htmlType="submit">
              Ingresar con Google
            </Button>
          </Block>
        </Block>
      </Block>
    </BlockTheme>
  )
}

export default LoginForm
