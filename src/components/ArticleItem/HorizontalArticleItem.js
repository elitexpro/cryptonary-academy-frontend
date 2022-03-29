import React, { useMemo } from 'react'
import moment from 'moment'
import {
  Typography,
  Link,
  CardActionArea,
  Grid,
  Box,
  IconButton,
  Divider,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import ShowMoreText from "react-show-more-text"
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { useSelector } from 'react-redux'
import { isPremium } from 'helpers'
import { LazyImage } from 'components/LazyImage'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'

const HorizontalArticleItem = ({ data, showPrimaryTag = true, showHours = false }) => {
  const history = useHistory()
  const currentUser = useSelector(currentUserSelector)
  const url = useMemo(() => {
    let coinUrl = `/article/${data?.id}?blog=RatingGuide&blogTo=/rating-guide&tag=news`
    return !currentUser && isPremium(data.tags) ? `/paywall` : coinUrl
  }, [currentUser, data])

  return (
    <Grid container alignItems="center">
      <Grid item md={5} xs={12}>
        <CardActionArea onClick={() => history.push(url)}>
          <LazyImage src={data.featureImage} />
        </CardActionArea>
      </Grid>

      <Grid item md={7} xs={12} sx={{ pl: 2 }}>
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

        {showHours &&
          <>
            <Divider sx={{ mt: 2, flexGrow: 1 }} />
            <Box sx={{ display: 'flex', pt: 2 }}>
              <Typography variant="subTitle4" sx={{ color: "#858585" }}>
                {moment(data?.publishedAt).format('DD MMM YYYY : kk:mm')}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton size="small">
                <BookmarkBorderRoundedIcon />
              </IconButton>
            </Box>
          </>
        }
      </Grid>
    </Grid>
  )

}

export default HorizontalArticleItem
