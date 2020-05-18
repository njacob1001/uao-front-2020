// import {} from './actions'
import { Reducer } from 'redux'
import { EntrepreneurReducer } from './models'
import * as TYPES from './types'

const initialState: EntrepreneurReducer = {
  loading: false,
  error: '',
  entrepreneurs: [],
}

export const entrepreneurReducer: Reducer<EntrepreneurReducer> = (state = initialState, action) => {
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
        entrepreneurs: action?.payload,
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
