import { get } from 'lodash'

export const coinStateSelector = (state) =>
  get(state, 'coin')

export const coinRatingsSelector = (state) =>
  get(state, 'coin.ratings', [])

export const coinRatingTypesSelector = (state) =>
  get(state, 'coin.rating_types', [])

export const currentCoinSelector = (state) =>
  get(state, 'coin.current_coin', [])

export const totalPagesSelector = (state) =>
  get(state, 'coin.totalPages', [])

export const coinNewsSelector = (state) =>
  get(state, 'coin.coin_news', [])

export const newsTotalPagesSelector = (state) =>
  get(state, 'coin.newsTotalPages', [])
