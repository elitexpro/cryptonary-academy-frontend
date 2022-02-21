import React, { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  Dialog,
  Container,
  Card,
  IconButton,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import FieldSection from './FieldSection'
import { Carousel } from 'components/Carousel'
import SvgEngagingVideo from 'assets/image/create-account-engaging-video.svg'
import SvgInDepth from 'assets/image/create-account-in-depth.svg'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const CAROUSELS = [
  {
    image: SvgEngagingVideo,
    title: 'Engaging video lessons',
    description: 'Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge',
  },
  {
    image: SvgInDepth,
    title: 'In-Depth guides and explanations ',
    description: 'Tailored to power your learning. We’re excited to start delivering you insightful crypto knowledge',
  },
]

const CAROUSEL_ITEM_STYLE = {
  imageStyle: { width: { xs: "100px", md: "200px" }, mb: { xs: 3, md: 6 } },
  titleStyle: { fontSize: { xs: "16px", md: "20px" }, color: "#FFF" },
  descriptionStyle: { color: "#858585", fontSize: "14px" }
}

const CreateAccountModal = () => {
  const history = useHistory()
  const [open, setOpen] = useState(true)

  const handleClose = useCallback(() => {
    setOpen(false)
    history.goBack()
  }, [history])

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      scroll="body"
      fullWidth={false}
      maxWidth="lg"
      PaperProps={{
        sx: { maxWidth: "100% !important", mx: 0 }
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 12,
          top: 12,
          zIndex: '2',
          color: '#A2A2A2'
        }}
      >
        <CloseRoundedIcon />
      </IconButton>
      <Box sx={{ display: { md: "flex", xs: "block" } }}>
        <Box sx={{ background: "#141414" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Card sx={{
              m: 4,
              mb: 2,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              width: '100%',
              maxWidth: 350,
            }}>
              <Carousel data={CAROUSELS} style={CAROUSEL_ITEM_STYLE} pagingStyle={"circle"} />
            </Card>
          </Stack>
        </Box>
        <Box>
          <Container>
            <FieldSection />
          </Container>
        </Box>
      </Box>
    </Dialog >
  )
}

export default CreateAccountModal
