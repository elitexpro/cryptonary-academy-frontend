import { get } from 'lodash'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const exploreTopicsSelector = (state) =>
  get(state, 'global.exploreTopics', null)
