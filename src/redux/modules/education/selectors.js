import { get } from 'lodash'

export const educationStateSelector = (state) =>
  get(state, 'education')

export const educationMediaTypeSelector = (state) =>
  get(state, 'education.mediaType', null)

export const educationSearchValueSelector = (state) =>
  get(state, 'education.searchValue', null)

export const educationTopicTagsSelector = (state) =>
  get(state, 'education.topicTags', null)

export const educationArticlesSelector = (state) =>
  get(state, 'education.articles', null)

export const educationVideosSelector = (state) =>
  get(state, 'education.videos', null)

export const educationFilteredTagNameSelector = (state) =>
  get(state, 'education.filteredTagsName', null)

export const educationReadingTimeSelector = (state) =>
  get(state, 'education.readingTime', null)

export const educationDurationSelector = (state) =>
  get(state, 'education.duration', null)

export const educationTabTagSelector = (state) =>
  get(state, 'education.tabTag', null)
