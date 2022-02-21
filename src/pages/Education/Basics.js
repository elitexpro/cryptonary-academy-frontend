import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Divider,
  Typography,
  Stack,
  Skeleton,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
// import { VideoItem } from 'components/VideoItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArticles } from 'redux/modules/article/actions'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { ArticleItem } from 'components/ArticleItem'

const Basics = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)

    if (currentUser) {
      dispatch(getAllArticles({
        params: {
          page: 1,
          perPage: 3
        },
        success: ({ data }) => {
          setData(data?.posts)
          setIsLoading(false)
        },
        fail: () => {
          // handle error 
        }
      }))
    }

  }, [currentUser, dispatch])

  return (
    <Box>
      <Stack direction="row" sx={{ mb: 3 }}>
        <Typography variant="h2" sx={{ color: "#141414" }}>Basics</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MButton color='inherit' size="small">
          View all
        </MButton>
      </Stack>

      <Grid container spacing={2}>
        {
          (isLoading || data.length === 0)
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
            data.map((post, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <ArticleItem data={post} />
                </Grid>
              )
            })
        }
      </Grid>

      <Divider sx={{ my: 4 }} />
    </Box>
  )
}

export default Basics
