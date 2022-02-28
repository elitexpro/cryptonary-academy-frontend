import { get } from 'lodash'

export const articleStateSelector = (state) =>
  get(state, 'article', null)

export const articleListSelector = (state) =>
  get(state, 'article.articles', null)

export const articleStatusSelector = (state) =>
  get(state, 'article.status', null)

export const filteredArticleSelector = (state) =>
  get(state, 'article.filteredArticles', null)
