import { get } from 'lodash'

export const filteredVideosSelector = (state) =>
  get(state, 'video.filteredVideos', null)
