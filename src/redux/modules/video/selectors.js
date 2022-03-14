import { get } from 'lodash'

export const filteredVideosSelector = (state) =>
  get(state, 'video.filteredVideos', null)

export const beginnerVideoSelector = (state) =>
  get(state, 'video.beginnerVideos', null)

export const intermediateVideoSelector = (state) =>
  get(state, 'video.intermediateVideos', null)

export const advanceVideoSelector = (state) =>
  get(state, 'video.advanceVideos', null)
