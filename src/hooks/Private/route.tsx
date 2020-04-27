// import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenSelector } from 'ducks/user/selectors'

const usePrivateRoute = (): void => {
  const token = useSelector(TokenSelector)
  const history = useHistory()
  if (!token) {
    history.push('/login')
  }
}

export default usePrivateRoute
