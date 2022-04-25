import { get } from 'lodash'

export const articleStateSelector = (state) =>
  get(state, 'article', null)

export const articleListSelector = (state) =>
  get(state, 'article.articles', null)

export const articleStatusSelector = (state) =>
  get(state, 'article.status', null)

export const filteredArticleSelector = (state) =>
  get(state, 'article.filteredArticles', null)

export const authorsListSelector = (state) =>
  get(state, 'article.authors', null)

export const totalAuthorsCountSelector = (state) =>
  get(state, 'article.totalAuthorsCount', null)

export const totalFilteredCountSelector = (state) =>
  get(state, 'article.totalFilteredCount', null)

export const currentArticleSelector = (state) =>
  get(state, 'article.article', null)
