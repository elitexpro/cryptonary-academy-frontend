import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Stack,
  Pagination,
  Typography,
  Menu,
  MenuItem,
  Box,
  Fade,
  Divider,
} from '@mui/material'
import { MButton } from 'components/CustomMaterial'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const PAGE_NUMBERS = [
  { name: '09', value: 9 },
  { name: '18', value: 18 },
  { name: '45', value: 45 },
]

const ArticlePagination = () => {
  const articles = useSelector((state) => state.article.articles)
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (index) => () => {
    setAnchorEl(null)
    setCurrentPage(index)
  }

  useEffect(() => {
    setPosts(articles)
  }, [articles])

  return (
    <Box>
      <Stack direction="row" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subTitle" sx={{ color: '#909090' }}>Showing</Typography>
          <MButton
            color="inherit"
            variant="contained"
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={!open ? <MdKeyboardArrowDown sx={{ fontSize: '24px' }} /> : <MdKeyboardArrowUp sx={{ fontSize: '24px' }} />}
            sx={{
              backgroundColor: "#FAFAFA",
              boxShadow: "none",
            }}
          >
            {PAGE_NUMBERS[currentPage].name}
          </MButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose(currentPage)}
            TransitionComponent={Fade}
          >
            {
              PAGE_NUMBERS.map((page, index) => (
                <MenuItem onClick={handleClose(index)} key={index}>{page.name}</MenuItem>
              ))
            }
          </Menu>
          <Typography variant='subTitle' sx={{ color: '#909090' }}>of {posts?.posts ? posts?.posts.length : 0}</Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Pagination count={4} shape="rounded" />
      </Stack>
      <Divider sx={{ mt: 6, mb: 4 }} />
    </Box>
  )
}

export default ArticlePagination
