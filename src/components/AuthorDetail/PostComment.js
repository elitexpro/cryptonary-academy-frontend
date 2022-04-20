import React from 'react'
import {
  Typography,
  Box,
  Stack,
  TextField,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'

const PostComment = () => {
  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subTitle4" color="#555">
          Your email address will not be published. Required fields are marked
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="E-Mail" variant="outlined" fullWidth />
      </Stack>

      <TextField
        label="Comment"
        variant="outlined"
        multiline
        fullWidth
        rows={3}
        sx={{ mb: 4 }}
      />

      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <MButton
          variant="contained"
          sx={{
            p: '8px 40px',
            backgroundColor: '#141414',
            color: 'white',
            '&:hover': {
              backgroundColor: '#141414',
              color: 'white',
            }
          }}
        >SUBMIT</MButton>
      </Box>
    </Box>
  )
}

export default PostComment
