import { createRoutine } from 'redux-saga-routines'
import { MEETING as meeting } from './types'

export const MEETING = createRoutine(meeting)

export const MAIN_REQUEST = createRoutine('MEETINGS/LOAD')
