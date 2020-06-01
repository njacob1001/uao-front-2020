import React, { FC, useEffect } from 'react'
import AdministratorTables from 'views/components/Table/Administrator'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/admins/types'

const Facilitators: FC = () => {
  const dispatch = useDispatch()
  const refresh = (): void => {
    dispatch(MAIN_REQUEST.trigger())
  }
  useEffect(() => {
    refresh()
  }, [])
  return <AdministratorTables refresh={refresh} />
}

export default Facilitators
