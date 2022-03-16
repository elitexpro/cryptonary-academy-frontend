import React from 'react'
import {
  Stack,
  Pagination,
  Typography,
} from '@mui/material'
import MDropdown from './MDropdown'

const MPagination = ({
  listCount,
  items,
  label,
  perPage,
  onChange,
  buttonStyle,
  dropboxStyle,
  layoutStyle,
  positionStyle,
  page,
  setPage
}) => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', mt: 4, ml: 4, ...positionStyle }}>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography variant="subTitle" color="#909090">Showing</Typography>
        <MDropdown
          items={items}
          label={label}
          onChange={onChange}
          buttonStyle={buttonStyle}
          dropboxStyle={dropboxStyle}
          layoutStyle={layoutStyle}
        />
        <Typography variant="subTitle" color="#909090">of {listCount}</Typography>
      </Stack>
      <Pagination
        shape="rounded"
        defaultPage={page}
        count={perPage === 'all' ? 1 : listCount % perPage > 0 ? parseInt(listCount / perPage) + 1 : parseInt(listCount / perPage)}
        onChange={(e, text) => setPage(text)}
      />
    </Stack>
  )
}

export default MPagination
