import { createRoutine } from 'redux-saga-routines'
import { login } from './types'

export const LOGIN = createRoutine(login)
export const LOGOUT = 'USER/LOGOUT'
