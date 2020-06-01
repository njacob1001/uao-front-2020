import React, { FC, useEffect } from 'react'
import FacilitatorsTable from 'views/components/Table/Facilitators'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/facilitators/types'

const Facilitators: FC = () => {
  const dispatch = useDispatch()
  const refresh = (): void => {
    dispatch(MAIN_REQUEST.trigger())
  }
  useEffect(() => {
    refresh()
  }, [])
  return <FacilitatorsTable refresh={refresh} />
}

export default Facilitators
