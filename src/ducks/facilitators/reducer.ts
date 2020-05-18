// import {} from './actions'
import { Reducer } from 'redux'
import { FacilitatorReducer } from './models'
import * as TYPES from './types'

const initialState: FacilitatorReducer = {
  loading: false,
  error: '',
  facilitators: [],
}

export const facilitatorReducer: Reducer<FacilitatorReducer> = (state = initialState, action) => {
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
        facilitators: action?.payload,
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