import React from 'react'
import { useSelector } from 'react-redux'
import {
  Hidden,
  Skeleton,
  Box,
  Stack,
  Typography,
  Pagination
} from '@mui/material'
import { MBreadcrumbs } from 'components/CustomMaterial'
import AuthorDetail from 'components/AuthorDetail'
import { authorsListSelector, totalAuthorsCountSelector } from 'redux/modules/article/selectors'

const detailRoot = [
  { text: 'Home', to: '/' },
  { text: 'Authors' },
]

const AuthorList = ({ isLoading, page, setPage }) => {
  const authorsList = useSelector(authorsListSelector)
  const total = useSelector(totalAuthorsCountSelector)

  return (
    <Box sx={{ mt: 6, px: 5 }}>
      <Hidden mdDown >
        {
          isLoading
            ? <Skeleton animation="wave" width="50%" />
            : <MBreadcrumbs data={detailRoot} />
        }
      </Hidden>

      <Stack spacing={4} sx={{ mt: 4 }}>
        {
          isLoading ?
            [0, 1, 2].map(item => (
              <Stack direction="row" spacing={4} sx={{ width: '60%' }} key={item}>
                <Skeleton variant="rectangular" animation="wave" width="200px" height="200px" />
                <Stack spacing={2} sx={{ width: '560px' }}>
                  <Skeleton animation="wave" width="60%" />
                  <Skeleton animation="wave" width="90%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation="wave" width="60%" />
                </Stack>
              </Stack>
            ))
            :
            authorsList.map((item, index) => (
              <AuthorDetail
                authorInfo={item}
                isLoading={isLoading}
                key={index}
                updateStyle={true}
                remoteBottomDivider={index === 4}
              />
            ))
        }
      </Stack>

      <Hidden mdDown>
        <Stack sx={{ mt: 4 }} direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="subTitle" color="#909090">
              Showing {page * 5 > total ? total : page * 5}
              &nbsp;of {total}
            </Typography>
          </Box>
          <Pagination
            count={parseInt(total / 5 + 1)}
            shape="rounded"
            onChange={(e, page) => setPage(page)}
          />
        </Stack>
      </Hidden>
    </Box>
  )
}

export default AuthorList
