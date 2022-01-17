import React, { useState } from 'react'
import {
  Stack,
  Dialog,
  Grid,
} from '@mui/material'
import ProfilePicture from "@dsalvagni/react-profile-picture"
import { useSelector } from 'react-redux'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { MButton, MInput } from 'components/CustomMaterial'
import ProfileSVG from 'assets/image/profile.svg'

const EditProfile = () => {
  const currentUser = useSelector(currentUserSelector)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(currentUser ? currentUser.email : '')
  const [showPicUploadModal, setShowPicUploadModal] = useState(false)

  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <Stack sx={{ my: 4 }} direction="row" spacing={2} alignItems="center">
          <img src={ProfileSVG} alt="" />
          <MButton
            variant="contained"
            color="inherit"
            sx={{
              color: "#555",
              height: 32
            }}
            onClick={() => setShowPicUploadModal(true)}
          >Update profile picture</MButton>
          <Dialog
            fullWidth
            maxWidth="md"
            open={showPicUploadModal}
            onClose={() => setShowPicUploadModal(false)}
          >
            <ProfilePicture useHelper={true} />
          </Dialog>
        </Stack>
        <MInput
          label='Username'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <MInput
          label='Email Address'
          placeholder='Your email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <MInput
          type='password'
          label='Password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Stack alignItems="flex-end">
          <MButton
            variant="outlined"
            color="success"
            sx={{ mt: 5, px: 4, height: 48 }}
          >Save Changes</MButton>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default EditProfile
