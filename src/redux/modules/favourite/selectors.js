import { get } from 'lodash'

export const favouritesListSelector = (state) =>
  get(state, 'favourite.favourites', null)
