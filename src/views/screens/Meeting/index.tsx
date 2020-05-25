import React, { FC, useEffect } from 'react'
import MeetingTable from 'views/components/Table/Meetings'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/meeting/action-types'

const Meetings: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])
  return <MeetingTable />
}

export default Meetings
