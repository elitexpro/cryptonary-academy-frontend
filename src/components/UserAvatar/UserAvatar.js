import React, { useState } from 'react'
import {
  Avatar,
  IconButton,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import avatarImg from 'assets/image/avatar.png'
import { FiUser, FiSliders, FiLogOut } from "react-icons/fi"
import { useHistory } from 'react-router-dom'
import useStyles from './styles.js'
import { logout } from 'redux/modules/auth/actions'
import { authClear } from 'helpers/localCheck'
import { useDispatch } from 'react-redux'


const UserAvatar = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [openTopic, setOpenTopic] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const profileMenu = [
    { text: 'My Account', icon: <FiUser className={classes.avatarListIcon} />, to: '/account' },
    { text: 'My Preferences ', icon: <FiSliders className={classes.avatarListIcon} />, to: '#' },
    {
      text: 'Sign out',
      icon: <FiLogOut className={classes.avatarListIcon} />,
      to: null,
      func: () => {
        dispatch(logout())
        authClear()
        history.push('/')
      }
    },
  ]

  const handleAvatarToggle = (e) => {
    setOpenTopic(prev => !prev)
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <IconButton
        color="inherit"
        sx={{ p: 0.5, width: '40px', height: '40px' }}
        onClick={handleAvatarToggle}
      >
        <Avatar alt="user" src={avatarImg} />
      </IconButton>

      <Popper
        open={openTopic}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement='bottom-end'
        style={{ zIndex: '1102' }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={{ border: '1px solid #EAEAEA' }}>
              <ClickAwayListener onClickAway={() => setOpenTopic(false)}>
                <Box>
                  <List>
                    {
                      profileMenu.map((item, key) => {
                        const { text, icon, to } = item

                        return (
                          <ListItem disablePadding key={key}>
                            <ListItemButton onClick={() => {
                              setOpenTopic(false)
                              return to ? history.push(to) : item?.func()
                            }}>
                              <ListItemIcon sx={{ mr: 2, minWidth: 'unset' }}>
                                {icon}
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItemButton>
                          </ListItem>
                        )
                      })
                    }
                  </List>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )

}

export default UserAvatar