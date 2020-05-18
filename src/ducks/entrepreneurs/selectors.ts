/* eslint-disable eqeqeq */
import { Selector, createSelector } from 'reselect'
import { Store } from 'ducks/store'
import { Entrepreneur } from './models'

const selectEntrepreneurs = (store: Store): Entrepreneur[] =>
  store.entrepreneurReducer?.entrepreneurs

export const entrepreneursSelector: Selector<Store, Entrepreneur[]> = createSelector(
  selectEntrepreneurs,
  a => a
)
