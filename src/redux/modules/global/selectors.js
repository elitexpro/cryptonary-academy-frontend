import { get } from 'lodash'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const exploreTopicsSelector = (state) =>
  get(state, 'global.exploreTopics', null)

export const pulsePinDateSelector = (state) =>
  get(state, 'global.pulsePinDate', null)

export const filteredPostsSelector = (state) =>
  get(state, 'global.filteredPosts', null)

export const educationMediaTypeSelector = (state) =>
  get(state, 'global.education.mediaType', null)

export const educationSearchValueSelector = (state) =>
  get(state, 'global.education.searchValue', null)
