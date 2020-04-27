import { StyledPageHeader } from 'views/components/UI/Header'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roleSelector } from 'ducks/user/selectors'

const Header: FC = () => {
  const history = useHistory()
  const role = useSelector(roleSelector)

  return (
    <StyledPageHeader
      onBack={() => history.go(-1)}
      title="SINAPSIS"
      subTitle={role[0]?.toUpperCase() + role?.slice(1)}
    />
  )
}
export default Header
