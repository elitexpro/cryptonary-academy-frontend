import React from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Skeleton,
  Grid,
} from '@mui/material'
import { Scrollbar } from 'components/Scrollbar'
import { RelatedVideoItem } from 'components/VideoItem'
import { relatedVideosSelector } from 'redux/modules/video/selectors'

const RelatedVideoSection = ({ height, relatedVideoLoading }) => {
  const relatedVideos = useSelector(relatedVideosSelector)

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500, mb: 3 }}>
        Related
      </Typography>

      <Scrollbar style={{ height }}>
        {
          relatedVideos.length > 0 && !relatedVideoLoading ?
            <Stack direction="column" divider={<Divider sx={{ my: 2 }} />}>
              {
                relatedVideos.map((item, index) => (
                  <RelatedVideoItem key={index} data={item} />
                ))
              }
            </Stack>
            :
            <Stack direction="column" spacing={2} divider={<Divider />}>
              {
                [0, 1, 2, 3].map((value, index) => {
                  return (
                    <Stack spacing={1} key={index}>
                      <Grid container spacing={2}>
                        <Grid item md={4}>
                          <Skeleton variant="rectangular" width="100%" height="100%" />
                        </Grid>

                        <Grid item md={8}>
                          <Skeleton width="100px" />
                          <Skeleton />
                          <Skeleton width="60%" />
                        </Grid>
                      </Grid>
                    </Stack>
                  )
                })
              }
            </Stack>
        }
      </Scrollbar>
    </Box >
  )
}

export default RelatedVideoSection
