import { get } from 'lodash'

export const alphaListSelector = (state) =>
  get(state, 'alpha.alphaList', null)

export const alphaTagsSelector = (state) =>
  get(state, 'alpha.alphaTags', null)

export const totalPagesSelector = (state) =>
  get(state, 'alpha.total', null)

export const latestAlphaSelector = (state) =>
  get(state, 'alpha.latestAlpha', null)
