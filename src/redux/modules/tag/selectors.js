import { get } from 'lodash'

export const tagStateSelector = (state) =>
  get(state, 'tag', null)

export const tagStatusSelector = (state) =>
  get(state, 'tag.status', null)

export const tagListSelector = (state) =>
  get(state, 'tag.tags', null)

export const currentTagSelector = (state) =>
  get(state, 'tag.tag', null)
