import React from 'react'
import {
  Grid,
  Stack,
  Skeleton,
  Hidden,
} from '@mui/material'
import { ArticleItem } from 'components/ArticleItem'
import { MPagination } from 'components/CustomMaterial'
import NoData from 'components/NoData'

const PAGE_ITEMS = [
  { text: '09', value: 9 },
  { text: '18', value: 18 },
  { text: '27', value: 27 },
  { text: 'All', value: 'all' },
]

const AlphaList = ({ isLoading = true, perPage, setPerPage, page, setPage, data, total, blog, blogTo, tag, relatedTitle }) => {
  const perPageText = PAGE_ITEMS.find(item => item.value === perPage)?.text

  const handleResetPage = (value) => {
    setPerPage(value)
    setPage(1)
  }

  return (
    <Grid container spacing={4} sx={{ mt: 0 }}>
      {
        isLoading
          ?
          [0, 1, 2].map((value, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width="100%" height={220} />
                <Skeleton width="100px" />
                <Skeleton />
                <Skeleton width="60%" />
              </Stack>
            </Grid>
          ))
          :
          <>
            {
              data && data.length === 0 && !isLoading ?
                <NoData minHeight={`calc(100vh - 520px)`} />
                :
                data?.map((item, index) => (
                  <Grid item md={4} xs={12} key={index}>
                    <ArticleItem data={item} showPrimaryTag={true} blog={blog} blogTo={blogTo} tag={tag} relatedTitle={relatedTitle} />
                  </Grid>
                ))
            }

            {data?.length > 0 &&
              <Hidden mdDown>
                <MPagination
                  listCount={total}
                  items={PAGE_ITEMS}
                  label={perPageText}
                  perPage={perPage}
                  onChange={handleResetPage}
                  page={page}
                  setPage={setPage}
                  buttonStyle={{ width: '30px' }}
                  layoutStyle={{ ml: '8px' }}
                  dropboxStyle={{ width: '80px' }}
                />
              </Hidden>}
          </>
      }
    </Grid>
  )
}

export default AlphaList
