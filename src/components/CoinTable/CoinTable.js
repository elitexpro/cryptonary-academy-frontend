import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import {
  Hidden,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Rating,
  Typography,
  TableSortLabel,
  Stack,
  Box,
  Skeleton,
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { MButton } from 'components/CustomMaterial'
import { FiChevronRight } from 'react-icons/fi'
import { coinRatingsSelector } from 'redux/modules/coin/selectors'

const TABLE_HEADERS = [
  'Name', 'Type', 'Sector', 'Rating'
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: '#858585',
    fontSize: 16,
    fontWeight: 'normal',
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  background: '#FAFAFA',
  border: 'non',
}))

const CoinTable = ({ isRelated, isLoading, data, setCurrentTab }) => {
  const history = useHistory()
  const coinRatings = useSelector(coinRatingsSelector)

  const [orderBy, setOrderBy] = useState('')
  const [order, setOrder] = useState('asc')

  const tableData = isRelated ? data : coinRatings
  const handleSort = (property) => (e) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Box sx={{ minHeight: `calc(100vh - 705px)` }}>
      <Table>
        {!isRelated &&
          <TableHead>
            <StyledTableRow>
              {TABLE_HEADERS.map((item, index) => (
                index === 1 || index === 2 ?
                  <Hidden mdDown key={index}>
                    <StyledTableCell key={index}>
                      <TableSortLabel
                        active={orderBy === item}
                        direction={orderBy === item ? order : 'asc'}
                        onClick={handleSort(item)}
                      >{item}</TableSortLabel>
                    </StyledTableCell>
                  </Hidden> :
                  <StyledTableCell key={index}>
                    <TableSortLabel
                      active={orderBy === item}
                      direction={orderBy === item ? order : 'asc'}
                      onClick={handleSort(item)}
                    >{item}</TableSortLabel>
                  </StyledTableCell>
              ))}
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableHead>
        }
        {isLoading ?
          <TableBody>
            {[...Array(5)].map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Box sx={{ width: '60%', ml: 1, display: 'flex', flexDirection: 'column' }}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  </Box>
                </TableCell>
                <Hidden mdDown>
                  <TableCell>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </TableCell>
                </Hidden>
                <TableCell>
                  <Skeleton />
                  <Skeleton width="60%" />
                </TableCell>
                <TableCell>
                  <Skeleton />
                  <Skeleton width="60%" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          :
          <TableBody>
            {tableData && tableData.map((item, index) => {
              const {
                tokenName, coinSymbol, coinTypes, coinSectors, logo, infoCommunityReview, infoTeamDeveloper,
                infoTokenomicAllocation, infoUsageReview, infoValueAccural
              } = item.attributes

              const rating = (infoCommunityReview + infoTeamDeveloper +
                infoTokenomicAllocation + infoUsageReview + infoValueAccural) / 5

              return (
                <TableRow key={index}>
                  <TableCell>
                    <Stack direction="row" alignItems="center">
                      <img src={logo.url} alt="" style={{ width: 40, height: 40 }} />
                      <Box
                        sx={{
                          ml: 1,
                          display: 'flex',
                          flexDirection: { md: 'row', xs: 'column' },
                          alignItems: { md: 'center', xs: 'flex-start' },
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant="subTitle1" color="#555" sx={{ mr: 0.5 }}>{tokenName}</Typography>
                        <Typography variant="subTitle4" color="#858585">{coinSymbol}</Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <Hidden mdDown>
                    <TableCell>{coinTypes[0].name}</TableCell>
                    <TableCell>{coinSectors[0].name}</TableCell>
                  </Hidden>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Rating value={rating ? rating : 0} precision={0.1} size='small' readOnly />
                      <Typography variant="subTitle1" color="#141414">{rating}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell onClick={() => {
                    isRelated && setCurrentTab('overview')
                    history.push(`/rating-guide/${coinSymbol}`)
                  }}>
                    <Hidden mdDown>
                      <MButton
                        variant="outlined"
                        color="success"
                        endIcon={<FiChevronRight />}
                      >
                        Details
                      </MButton>
                    </Hidden>
                    <Hidden mdUp>
                      <FiChevronRight style={{ fontSize: '20px', color: '#4AAF47' }} />
                    </Hidden>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        }
      </Table>

      {isRelated &&
        (
          data && data.length > 0 ?
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <MButton
                variant="contained"
                color="success"
                sx={{
                  color: '#FFF',
                  fontSize: 16,
                  px: 4,
                  py: '12px',
                }}
                onClick={() => history.push('/rating-guide')}
              >View all coins</MButton>
            </Box>
            :
            <Box>
              No Related Coins
            </Box>
        )
      }
    </Box>
  )
}

export default CoinTable
