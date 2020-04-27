// import {} from './actions'
import { Reducer } from 'redux'
import { MeetingReducer } from './models'
import * as TYPES from './action-types'
import { DELETE_ALL } from './types'

const initialState: MeetingReducer = {
  loading: false,
  error: null,
  meetings: [],
}

export const meetingReducer: Reducer<MeetingReducer> = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.MEETING.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case TYPES.MEETING.SUCCESS: {
      return {
        ...state,
        meetings: action?.payload,
      }
    }
    case TYPES.MEETING.FAILURE: {
      return {
        ...state,
        error: action?.payload,
      }
    }
    case TYPES.MEETING.FULFILL: {
      return {
        ...state,
        loading: false,
      }
    }
    case DELETE_ALL: {
      return initialState
    }

    default:
      return state
  }
}
