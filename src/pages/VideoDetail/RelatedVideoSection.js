import React from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material'
import { Scrollbar } from 'components/Scrollbar'
import { RelatedVideoItem } from 'components/VideoItem'

const RelatedVideoSection = ({ height }) => {

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500, mb: 3 }}>
        Related
      </Typography>

      <Scrollbar style={{ height }}>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <RelatedVideoItem />
          <RelatedVideoItem />
          <RelatedVideoItem />
          <RelatedVideoItem />
        </Stack>
      </Scrollbar>
    </Box>
  )
}

export default RelatedVideoSection
