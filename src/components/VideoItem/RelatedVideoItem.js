import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Typography,
  Stack,
  CardActionArea,
  Grid,
} from '@mui/material'
import ShowMoreText from "react-show-more-text"
import { LazyImage } from 'components/LazyImage'
import { isPremium } from 'helpers'
import { currentUserSelector } from 'redux/modules/auth/selectors'

const RelatedVideoItem = ({ data }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const url = useMemo(() => {
    return !currentUser && isPremium(data.tags) ? `/paywall` : `/video/${data?.id}`
  }, [currentUser, data])

  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data?.attributes?.thumbnail?.url} />
        </CardActionArea>
      </Grid>

      <Grid item md={8}>
        <Stack spacing={0.5}>
          <Typography variant="subTitle" sx={{ color: "#232A45", fontWeight: 500 }}>
            {data?.attributes?.title}
          </Typography>

          <Typography variant="subTitle" sx={{ color: "#858585" }}>
            <ShowMoreText lines={1} expandByClick={false} more="">
              {data?.attributes?.description}
            </ShowMoreText>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )

}

export default RelatedVideoItem