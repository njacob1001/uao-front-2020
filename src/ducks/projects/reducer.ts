// import {} from './actions'
import { Reducer } from 'redux'
import { ProjectReducer } from './models'
import * as TYPES from './types'

const initialState: ProjectReducer = {
  loading: false,
  error: '',
  projects: [],
}

export const projectReducer: Reducer<ProjectReducer> = (state = initialState, action) => {
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
