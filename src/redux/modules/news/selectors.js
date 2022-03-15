import { get } from 'lodash'

export const newsStateSelector = (state) =>
  get(state, 'news')

export const newsSortBySelector = (state) =>
  get(state, 'news.sortBy', null)

export const newsSearchValueSelector = (state) =>
  get(state, 'news.searchValue', null)

export const newsTagSelector = (state) =>
  get(state, 'news.tag', null)
