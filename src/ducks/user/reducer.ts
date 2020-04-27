// import {} from './actions'
import { Reducer } from 'redux'
import { UserReducer } from './models'
import * as TYPES from './action-types'

const initialState: UserReducer = {
  name: '',
  token: '',
  email: '',
  role: '',
  id: 0,
  lastName: '',
  cc: '',
  uaoCode: '',
  loading: false,
  error: null,
  username: '',
  photo: '',
}

export const userReducer: Reducer<UserReducer> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case TYPES.LOGIN.SUCCESS: {
      return {
        ...state,
        ...action?.payload,
      }
    }
    case TYPES.LOGIN.FAILURE: {
      return {
        ...state,
        error: action?.payload?.message,
      }
    }
    case TYPES.LOGIN.FULFILL: {
      return {
        ...state,
        error: null,
        loading: false,
      }
    }
    case TYPES.LOGOUT: {
      return initialState
    }
    default:
      return state
  }
}
