import { get } from 'lodash'

export const pulseStateSelector = (state) =>
  get(state, 'pulse')
