import React, { FC, useEffect } from 'react'
import FacilitatorsTable from 'views/components/Table/Facilitators'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/facilitators/types'

const Facilitators: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])
  return <FacilitatorsTable />
}

export default Facilitators
