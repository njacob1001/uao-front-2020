import React, { FC, useEffect } from 'react'
import EntrepreneursTable from 'views/components/Table/Entrepreneurs'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/entrepreneurs/types'

const Entrepreneurs: FC = () => {
  const dispatch = useDispatch()

  const refresh = (): void => {
    dispatch(MAIN_REQUEST.trigger())
  }

  useEffect(() => {
    refresh()
  }, [])

  return <EntrepreneursTable refresh={refresh} />
}

export default Entrepreneurs
