import React from 'react'
import {
  Box,
  Grid,
  Stack,
  Skeleton,
} from '@mui/material'
import { VideoItem } from 'components/VideoItem'
import { ArticleItem } from 'components/ArticleItem'

const LevelSection = ({ data, isLoading, mediaType }) => {

  return (
    <Box>
      {/* {
        !hideSectionHeader &&
        <Stack direction="row" sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ color: "#141414" }}>{levelString}</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <MButton color='inherit' size="small" onClick={() => history.push(`/education/${level}`)}>
            View all
          </MButton>
        </Stack>
      } */}

      <Grid container spacing={2}>
        {
          (isLoading)
            ?
            [0, 1, 2].map((value, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <Stack spacing={1}>
                    <Skeleton variant="rectangular" width="100%" height={220} />
                    <Skeleton width="100px" />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Stack>
                </Grid>
              )
            })
            :
            data.map((item, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  {
                    mediaType === 'video'
                      ?
                      <VideoItem data={item} />
                      :
                      <ArticleItem data={item} showPrimaryTag={false} />
                  }
                </Grid>
              )
            })
        }
      </Grid>
    </Box>
  )
}

export default LevelSection
