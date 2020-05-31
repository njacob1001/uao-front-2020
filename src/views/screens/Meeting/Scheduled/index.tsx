import React, { FC, useEffect } from 'react'
import MeetingTable from 'views/components/Table/Meetings'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/meeting/action-types'

const MeetingsAgendados: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger({ type: 'scheduled' }))
  }, [])
  return <MeetingTable title="Encuentros Agendados" />
}

export default MeetingsAgendados
