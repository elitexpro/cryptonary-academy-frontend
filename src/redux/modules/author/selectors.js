import { get } from 'lodash'

export const authorStateSelector = (state) =>
  get(state, 'author', null)

export const authorListSelector = (state) =>
  get(state, 'author.authors', null)

export const currentAuthorSelector = (state) =>
  get(state, 'author.author', null)

export const latestArticlesOfAuthorSelector = (state) =>
  get(state, 'author.latestArticles', null)
