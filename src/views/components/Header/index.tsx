import { StyledPageHeader } from 'views/components/UI/Header'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { roleSelector } from 'ducks/user/selectors'

const Header: FC = () => {
  const history = useHistory()
  const { name: userNames, lastName: userLast, role: userRole } = useSelector(
    ({ userReducer: { loading, error, token, role, name, lastName } }: any) => ({
      loading,
      error,
      token,
      role,
      name,
      lastName,
    })
  )

  return (
    <StyledPageHeader
      style={{ height: '4.125rem' }}
      onBack={() => history.go(-1)}
      title="SINAPSIS"
      subTitle={`${userNames} ${userLast}  (${userRole[0]?.toUpperCase() + userRole?.slice(1)})`}
    />
  )
}
export default Header
