import React, { FC, useEffect } from 'react'
import ProjectsTables from 'views/components/Table/Projects'
import { useDispatch } from 'react-redux'
import { MAIN_REQUEST } from 'ducks/projects/types'

const Projects: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MAIN_REQUEST.trigger())
  }, [])
  return <ProjectsTables />
}

export default Projects
