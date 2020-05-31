// import {} from './actions'
import { Reducer } from 'redux'
import { AdministratorReducer } from './models'
import * as TYPES from './types'

const initialState: AdministratorReducer = {
  loading: false,
  error: '',
  administrators: [],
}

export const administratorReducer: Reducer<AdministratorReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.MAIN_REQUEST.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case TYPES.MAIN_REQUEST.SUCCESS: {
      return {
        ...state,
        administrators: action?.payload,
      }
    }
    case TYPES.MAIN_REQUEST.FAILURE: {
      return {
        ...state,
        error: action?.payload,
      }
    }
    case TYPES.MAIN_REQUEST.FULFILL: {
      return {
        ...state,
        loading: false,
      }
    }

    default:
      return state
  }
}
