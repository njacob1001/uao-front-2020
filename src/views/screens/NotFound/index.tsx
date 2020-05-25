import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'

const NotFound: FC = () => {
  const history = useHistory()
  const goToHome = () => {
    history.push('/app/facilitators/all')
  }
  const boton = (
    <Button onClick={goToHome} type="primary">
      Volver al inicio
    </Button>
  )
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, esta página no esta disponible."
      extra={boton}
    />
  )
}
export default NotFound
