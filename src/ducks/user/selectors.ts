import { createSelector, Selector } from 'reselect'
import { Store } from 'ducks/store'
import { UserReducer } from './models'

const selectUser = (store: Store): UserReducer => store.userReducer

const selectToken = (user: UserReducer): string => user.token

const selectRole = (user: UserReducer): string => user.role

export const TokenSelector: Selector<Store, string> = createSelector(selectUser, selectToken)

export const roleSelector: Selector<Store, string> = createSelector(selectUser, selectRole)

// export const TokenSelector
