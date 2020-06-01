import React, { FC, useEffect } from 'react'
import MeetingTable from 'views/components/Table/Meetings'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/meeting/action-types'

const MeetingsCompletados: FC = () => {
  const dispatch = useDispatch()
  const refresh = () => {
    dispatch(MAIN_REQUEST.trigger({ type: 'completed' }))
  }
  useEffect(() => {
    refresh()
  }, [])
  return <MeetingTable title="Encuentros realizados" refresh={refresh} />
}

export default MeetingsCompletados
