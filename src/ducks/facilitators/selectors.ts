/* eslint-disable eqeqeq */
import { Selector, createSelector } from 'reselect'
import { Store } from 'ducks/store'
import { Facilitator } from './models'

const selectFacilitators = (store: Store): Facilitator[] => store.facilitatorReducer?.facilitators

export const facilitatorSelector: Selector<Store, Facilitator[]> = createSelector(
  selectFacilitators,
  a => a
)
