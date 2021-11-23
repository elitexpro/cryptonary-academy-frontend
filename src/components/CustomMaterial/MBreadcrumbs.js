import React from 'react'
import {
  Breadcrumbs,
  Typography,
  Link,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useHistory } from 'react-router-dom'


const MBreadcrumbs = ({ data, ...props }) => {
  const history = useHistory()
  const prevItems = data.slice(0, -1)
  const lastItem = data.slice(-1)[0]

  const handleClick = (to) => {
    history.push(to)
  }

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon />}
      aria-label="breadcrumb"
      maxItems={3}
      {...props}
    >
      {
        prevItems.map((item, key) => {
          const { text, to } = item

          return (
            <Link
              underline="hover"
              color="black"
              onClick={() => handleClick(to)}
              key={key}
              sx={{ cursor: 'pointer', color: '#555' }}
            >
              {text}
            </Link>
          )
        })
      }
      <Typography sx={{ color: "#858585" }}>
        {lastItem.text}
      </Typography>
    </Breadcrumbs>
  )
}

export default MBreadcrumbs
