import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import { getMeetings } from 'services/meeting'
import * as TYPES from './action-types'

function* meetingSaga(): any {
  try {
    const user = yield select((store: any) => store?.userReducer)
    console.log(user)
    const { id: userID, role } = user
    yield put(TYPES.MEETING.request())
    const { data: result } = yield call(getMeetings, userID, role)
    if (result.data?.meetings) {
      yield put(
        TYPES.MEETING.success(
          result.data?.meetings.map((m: any) => ({
            ...m,
            consultor: {
              name: m?.consultor?.name,
              lastName: m?.consultor?.last_name,
              photo: m?.consultor?.photo?.url,
            },
            emprendedor: {
              name: m?.emprendedor?.name,
              lastName: m?.emprendedor?.last_name,
              photo: m?.emprendedor?.photo?.url,
            },
          }))
        )
      )
    }
  } catch (err) {
    yield put(TYPES.MEETING.failure(err))
  } finally {
    yield put(TYPES.MEETING.fulfill())
  }
}

export function* meetingSagas(): any {
  yield all([takeLatest(TYPES.MEETING.TRIGGER, meetingSaga)])
}
