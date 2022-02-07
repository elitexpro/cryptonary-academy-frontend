import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { styled } from '@mui/material/styles'
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
  Box
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { MButton } from 'components/CustomMaterial'
import { FiChevronRight } from 'react-icons/fi'

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

const CoinTable = ({ coinRatings }) => {
  const history = useHistory()
  const [orderBy, setOrderBy] = useState('')
  const [order, setOrder] = useState('asc')

  const handleSort = (property) => (e) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Table>
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
      <TableBody>
        {coinRatings?.data && coinRatings?.data.map((item, index) => {
          const {
            tokenName, coinSymbol, coinTypes, coinSectors, logo, infoCommunityReview, infoTeamDeveloper,
            infoTokenomicAllocation, infoUsageReview, infoValueAccural
          } = item.attributes

          const rating = (infoCommunityReview + infoTeamDeveloper + infoTokenomicAllocation + infoUsageReview + infoValueAccural) / 5

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
                    }}>
                    <Box sx={{ mr: 0.5 }}>
                      <Typography variant="subTitle1" color="#555">{tokenName}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subTitle4" color="#858585">{coinSymbol}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </TableCell>
              <Hidden mdDown>
                <TableCell>{coinTypes[0].name}</TableCell>
                <TableCell>{coinSectors[0].name}</TableCell>
              </Hidden>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Rating defaultValue={rating} precision={0.1} size='small' readOnly />
                  <Typography variant="subTitle1" color="#141414">{rating}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Hidden mdDown>
                  <MButton
                    variant="outlined"
                    color="success"
                    endIcon={<FiChevronRight />}
                    onClick={() => history.push(`rating-guide/${coinSymbol}`)}
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
    </Table>
  )
}

export default CoinTable
