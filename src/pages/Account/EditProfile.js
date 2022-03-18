import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Link
} from '@mui/material'
import { useSelector } from 'react-redux'
import Avatar from 'react-avatar-edit'

import { currentUserSelector } from 'redux/modules/auth/selectors'
import { updateUserProfile } from 'redux/modules/auth/actions'

import { MButton, MInput } from 'components/CustomMaterial'
import ProfileSVG from 'assets/image/profile.svg'

const EditProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(currentUser ? currentUser.email : '')
  const [showPicUploadModal, setShowPicUploadModal] = useState(false)
  const [currentPicture, setCurrentPicture] = useState(currentUser ? currentUser.profilePicture.url : null)
  const [profilePicture, setProfilePicture] = useState(null)
  const changePhoto = useRef()

  const handlePictureSelected = (event) => {
    setCurrentPicture(URL.createObjectURL(event.target.files[0]))
  }

  const handleSavePhoto = async () => {
    await dispatch(updateUserProfile({ body: profilePicture }))
    setShowPicUploadModal(false)
    setProfilePicture(null)
  }

  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <Stack sx={{ my: 4 }} direction="row" spacing={2} alignItems="center">
          <img src={currentPicture || ProfileSVG} alt="" style={{ width: 56, height: 56, borderRadius: 28 }} />
          <MButton
            variant="contained"
            color="inherit"
            sx={{
              color: "#555",
              height: 32
            }}
            onClick={() => {
              setProfilePicture(null)
              setShowPicUploadModal(true)
            }}
          >Update profile picture</MButton>
          <Dialog
            fullWidth
            maxWidth="md"
            open={showPicUploadModal}
            onClose={() => setShowPicUploadModal(false)}
          >
            <DialogTitle sx={{ p: 2 }}>
              <Typography color="#141414">Edit Photo</Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ textAlign: "center" }}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Avatar
                    width={250}
                    height={250}
                    onCrop={(preview) => setProfilePicture(preview)}
                    onClose={() => setProfilePicture(null)}
                    src={currentPicture}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack alignItems="center">
                    <Typography>Show clients the best version</Typography>
                    {profilePicture && <img src={profilePicture} alt="preview" style={{ width: 250, height: 250 }} />}
                  </Stack>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <input type="file" ref={changePhoto} onChange={handlePictureSelected} style={{ display: "none" }} />
              <Link
                component="button"
                variant="outlined"
                underline="hover"
                sx={{
                  cursor: "pointer",
                  color: "#4AAF47",
                  mr: 2
                }}
                onClick={() => changePhoto.current.click()}
              >{currentPicture ? "Change Image" : "Upload Image"}</Link>
              <MButton
                variant="contained"
                color="success"
                sx={{
                  color: "#FFF"
                }}
                onClick={handleSavePhoto}
              >Save Photo</MButton>
            </DialogActions>
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
