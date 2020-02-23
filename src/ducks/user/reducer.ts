// import {} from './actions'
import { Reducer } from 'redux'
import { UserReducer } from './models'
import * as TYPES from './action-types'

const initialState: UserReducer = {
  name: '',
  loading: false,
  token: '',
  error: null,
  email: '',
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
        email: action?.payload?.email,
        name: action?.payload?.name,
        token: action?.payload?.token,
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
