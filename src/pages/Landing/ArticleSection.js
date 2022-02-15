import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Typography,
  Card,
  Skeleton,
  Grid,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllArticles } from 'redux/modules/article/actions'
import { ArticleItem } from 'components/ArticleItem'

const ArticleSection = ({ id }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
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
      }
    }))
  }, [dispatch])

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ my: { md: 10, xs: 4 } }}
      id={id}
    >
      <Typography variant="headTitle2" >
        In-Depth journals and articles
      </Typography>

      <Typography variant="subTitle1" sx={{ color: "#555", maxWidth: 600, textAlign: "center" }}>
        Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge.
      </Typography>

      <Grid container spacing={2}>
        {
          (isLoading || data.length === 0)
            ?
            [0, 1, 2].map((value, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <Card
                    variant="outlined"
                    sx={{ p: 2, borderRadius: '8px' }}
                  >
                    <Stack spacing={1}>
                      <Skeleton variant="rectangular" width="100%" height={250} />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Card>
                </Grid>
              )
            })
            :
            data.map((post, index) => {
              return (
                <Grid item key={index} xs={12} md={4}>
                  <Card
                    variant="outlined"
                    sx={{ p: 2, borderRadius: '8px' }}
                  >
                    <ArticleItem data={post} />
                  </Card>
                </Grid>
              )
            })
        }
      </Grid>

      <Box sx={{ pt: 6 }}>
        <MButton
          variant='outlined'
          color='inherit'
          sx={{ fontSize: '16px', px: 2, color: '#555' }}
          onClick={() => history.push('/article')}
        >
          View more
        </MButton>
      </Box>
    </Stack >
  )
}

export default ArticleSection
