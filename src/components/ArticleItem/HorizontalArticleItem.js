import React, { useMemo } from 'react'
import {
  Typography,
  Link,
  CardActionArea,
  Grid,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import ShowMoreText from "react-show-more-text"
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { isPremium } from 'helpers'
import { LazyImage } from 'components/LazyImage'

const HorizontalArticleItem = ({ data, showPrimaryTag = true }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const url = useMemo(() => {
    return !currentUser && isPremium(data.tags) ? `/paywall` : `article/${data?.id}`
  }, [currentUser, data])

  return (
    <Grid container alignItems="center">
      <Grid item md={4} xs={12}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data.featureImage} />
        </CardActionArea>
      </Grid>

      <Grid item md={8} xs={12} sx={{ pl: 2 }}>
        {showPrimaryTag &&
          <Typography variant="subTitle4" sx={{ color: "#4AAF47", pt: 1 }}>
            {data?.primaryTag.name}
          </Typography>
        }

        <Typography variant="subTitle3" >
          <Link
            component={'span'}
            onClick={() => history.push(url)}
            underline="hover"
            sx={{ color: "#232A45", fontSize: "18px", cursor: "pointer" }}
          >
            <ShowMoreText lines={1} expandByClick={false} more="">
              {data.title}
            </ShowMoreText>
          </Link>
        </Typography>

        <Typography variant="subTitle4" sx={{ color: "#858585", height: '40px' }}>
          <ShowMoreText lines={2} expandByClick={false} more="">
            {data.excerpt}
          </ShowMoreText>
        </Typography>
      </Grid>
    </Grid>
  )

}

export default HorizontalArticleItem
