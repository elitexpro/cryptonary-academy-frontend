import { get } from 'lodash'

export const articleStateSelector = (state) =>
  get(state, 'article', null)
