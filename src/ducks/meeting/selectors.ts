/* eslint-disable eqeqeq */
import { Selector, ParametricSelector, createSelector } from 'reselect'
import { Store } from 'ducks/store'
import { Meeting } from './models'

interface DetailProps {
  meetingId: string
}

const selectMeetings = (store: Store): Meeting[] => store.meetingReducer?.meetings

export const allMeetingSelectors: Selector<Store, Meeting[]> = createSelector(
  selectMeetings,
  a => a
)

const selectDetailprops = (_: Store, props: DetailProps): string => props.meetingId

const selectMeeting = (meetings: Meeting[], meetId: string): Meeting =>
  meetings.find(m => m.id.toString() == meetId) as Meeting

export const MeetingSelector: ParametricSelector<Store, DetailProps, Meeting> = createSelector(
  selectMeetings,
  selectDetailprops,
  selectMeeting
)
