/* eslint-disable eqeqeq */
import { Selector, createSelector } from 'reselect'
import { Store } from 'ducks/store'
import { Administrator } from './models'

const selectAdministrators = (store: Store): Administrator[] =>
  store.administratorReducer?.administrators

export const administratorSelector: Selector<Store, Administrator[]> = createSelector(
  selectAdministrators,
  a => a
)
