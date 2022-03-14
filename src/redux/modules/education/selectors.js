import { get } from 'lodash'

export const educationStateSelector = (state) =>
  get(state, 'education')

export const educationMediaTypeSelector = (state) =>
  get(state, 'education.mediaType', null)

export const educationSearchValueSelector = (state) =>
  get(state, 'education.searchValue', null)

export const educationTopicTagsSelector = (state) =>
  get(state, 'education.topicTags', null)

export const beginnerArticleSelector = (state) =>
  get(state, 'education.beginnerArticles', null)

export const intermediateArticleSelector = (state) =>
  get(state, 'education.intermediateArticles', null)

export const advanceArticleSelector = (state) =>
  get(state, 'education.advanceArticles', null)

export const educationFilteredTagNameSelector = (state) =>
  get(state, 'education.filteredTagsName', null)

export const educationReadingTimeSelector = (state) =>
  get(state, 'education.readingTime', null)

export const educationDurationSelector = (state) =>
  get(state, 'education.duration', null)
