/* eslint-disable eqeqeq */
import { Selector, createSelector } from 'reselect'
import { Store } from 'ducks/store'
import { Project } from './models'

const selectProjects = (store: Store): Project[] => store.projectReducer?.projects

export const ProjectSelector: Selector<Store, Project[]> = createSelector(selectProjects, a => a)
