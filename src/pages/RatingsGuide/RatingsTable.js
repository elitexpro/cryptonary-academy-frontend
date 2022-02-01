import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  Divider,
  Stack,
  Grid,
  Chip,
  FormControlLabel,
  Checkbox,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Rating,
  Typography,
  TableSortLabel,
  Hidden,
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { MButton } from 'components/CustomMaterial'
import BitcoinSVG from 'assets/image/bitcoin.svg'
import { FiChevronRight } from 'react-icons/fi'

const TYPES = [
  {
    name: 'Currency/Commodity',
    isSelected: false,
  },
  {
    name: 'Utility Token',
    isSelected: false,
  },
  {
    name: 'Revenue',
    isSelected: false,
  },
  {
    name: 'Governance Token',
    isSelected: false,
  },
]

const TABLE_DATA = [
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
  {
    name: {
      icon: <img src={BitcoinSVG} alt="" />,
      full_name: 'Bitcoin',
      short_name: 'BTC'
    },
    type: 'Currency/Commodity',
    sector: 'Currencies',
    rating: 3.2
  },
]

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


const RatingsTable = () => {
  const [types, setTypes] = useState(TYPES)
  const [orderBy, setOrderBy] = useState('')
  const [order, setOrder] = useState('asc')

  const handleClickTopic = (item) => () => {
    setTypes(prev => prev.map(x => {
      const { isSelected, name } = x
      return {
        name,
        isSelected: name === item.name ? !isSelected : isSelected
      }
    }))
  }

  const handleSort = (property) => (e) => {
    const isAsc = orderBy === property && order === 'asc'

    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Box sx={{ px: { md: 5, xs: 0 } }}>
      <Divider sx={{ color: '#E4E4E4', my: 4 }} />
      <Hidden mdDown>
        <Stack sx={{ mb: 4 }} direction='row' justifyContent='space-between' alignItems='center'>
          <Grid container spacing={2}>
            {
              types.map((item, key) => (
                <Grid item xs='auto' key={key}>
                  <Chip
                    color={item.isSelected ? 'success' : undefined}
                    label={item.name}
                    variant={!item.isSelected ? 'outlined' : undefined}
                    onClick={handleClickTopic(item)}
                  />
                </Grid>
              ))
            }
          </Grid>
          <Box
            sx={{
              background: '#FCFCFC',
              px: 3,
              height: 40,
              width: 310,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <FormControlLabel
              sx={{ fontSize: 14, color: '#909090' }}
              control={
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: '#141414'
                    }
                  }}
                />
              }
              label='Show new coins only'
            />
          </Box>
        </Stack>
      </Hidden>
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
          {TABLE_DATA.map((item, index) => {
            const { name, type, sector, rating } = item

            return (
              <TableRow key={index}>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    {name.icon}
                    <Box
                      sx={{
                        ml: 1,
                        display: 'flex',
                        flexDirection: { md: 'row', xs: 'column' },
                        alignItems: { md: 'center', xs: 'flex-start' },
                        justifyContent: 'center',
                      }}>
                      <Box sx={{ mr: 0.5 }}>
                        <Typography variant="subTitle1" color="#555">{name.full_name}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subTitle4" color="#858585">{name.short_name}</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </TableCell>
                <Hidden mdDown>
                  <TableCell>{type}</TableCell>
                  <TableCell>{sector}</TableCell>
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
    </Box>
  )
}

export default RatingsTable
