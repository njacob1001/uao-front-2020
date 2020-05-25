import React, { FC, useEffect } from 'react'
import EntrepreneursTable from 'views/components/Table/Entrepreneurs'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/entrepreneurs/types'

const Entrepreneurs: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])

  return <EntrepreneursTable />
}

export default Entrepreneurs
