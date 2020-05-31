import React, { FC, useEffect } from 'react'
import MeetingTable from 'views/components/Table/Meetings'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/meeting/action-types'

const TodayMeetings: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger({ type: 'today' }))
  }, [])
  return <MeetingTable title="Encuentros Hoy" />
}

export default TodayMeetings
