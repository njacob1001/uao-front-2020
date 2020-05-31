import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { getAll } from 'services/encuentro'
import * as TYPES from './action-types'

function* getAllMeetings(action: any): any {
  try {
    yield put(TYPES.MAIN_REQUEST.request())
    const { data: result } = yield call(getAll, action?.payload?.type)
    if (result.data?.encuentros) {
      yield put(TYPES.MAIN_REQUEST.success(result.data?.encuentros))
    }
  } catch (err) {
    yield put(TYPES.MAIN_REQUEST.failure(err))
  } finally {
    yield put(TYPES.MAIN_REQUEST.fulfill())
  }
}

// function* meetingSaga(): any {
//   try {
//     const user = yield select((store: any) => store?.userReducer)
//     console.log(user)
//     const { id: userID, role } = user
//     yield put(TYPES.MEETING.request())
//     const { data: result } = yield call(getMeetings, userID, role)
//     if (result.data?.meetings) {
//       yield put(TYPES.MEETING.success(result.data?.meetings))
//     }
//   } catch (err) {
//     yield put(TYPES.MEETING.failure(err))
//   } finally {
//     yield put(TYPES.MEETING.fulfill())
//   }
// }

export function* meetingSagas(): any {
  yield all([
    // takeLatest(TYPES.MEETING.TRIGGER, meetingSaga),
    takeLatest(TYPES.MAIN_REQUEST.TRIGGER, getAllMeetings),
  ])
}
