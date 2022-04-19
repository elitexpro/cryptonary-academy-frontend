import React from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Stack,
  Skeleton,
  Pagination,
  Hidden,
} from '@mui/material'
import { VideoItem } from 'components/VideoItem'
import { ArticleItem } from 'components/ArticleItem'
import { educationMetaInfoSelector } from 'redux/modules/education/selectors'

const LevelSection = ({ data, isLoading, mediaType, tag, page, setPage }) => {
  const meta = useSelector(educationMetaInfoSelector)

  return (
    <Box>
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
                      <VideoItem data={item} blog="Education" blogTo="/education/crypto-school" tag={tag} />
                      :
                      <ArticleItem data={item} showPrimaryTag={false} blog="Education" blogTo="/education/crypto-school" tag={tag} />
                  }
                </Grid>
              )
            })
        }
      </Grid>

      {!isLoading && data?.length > 0 &&
        <Hidden mdDown>
          <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={meta?.pagination?.pages}
              defaultPage={page}
              shape="rounded"
              onChange={(e, page) => setPage(page)}
            />
          </Box>
        </Hidden>
      }
    </Box>
  )
}

export default LevelSection
