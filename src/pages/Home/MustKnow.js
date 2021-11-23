import React from 'react'
import useStyles from './styles.js'
import {
  Box,
  Grid,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { VideoItem } from 'components/VideoItem'

const MustKnow = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.basicsBox}>
        <Box sx={{ display: 'flex' }}>
          <div className={classes.sectionTitle}>Must Knows</div>
          <Box sx={{ flexGrow: 1 }} />
          <MButton color='inherit' size="small">
            View all
          </MButton>
        </Box>

        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <VideoItem />
          </Grid>
          <Grid item md={4} xs={12}>
            <VideoItem />
          </Grid>
          <Grid item md={4} xs={12}>
            <VideoItem />
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />
      </Box>
    </>
  )
}

export default MustKnow
