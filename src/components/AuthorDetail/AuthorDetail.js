import React, { useState } from 'react'
import {
  Box,
  Typography,
  Stack,
  Divider,
  Skeleton,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { LazyImage } from 'components/LazyImage'
import ShowMoreText from "react-show-more-text"
import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import PostComment from './PostComment'

const AuthorDetail = ({ authorInfo, isLoading, updateStyle = false, remoteBottomDivider = false, showComments = false }) => {
  const [postComment, setPostComment] = useState(false)
  const [showCommentsAccordion, setShowCommentsAccordion] = useState(false)

  return (
    <Box sx={{ width: updateStyle ? '60%' : '100%' }}>
      {!updateStyle && <Divider sx={{ mb: 4 }} />}

      <Stack spacing={2}>
        {!updateStyle &&
          <Typography variant="subTitle" sx={{ color: "#858585" }}>
            About Author
          </Typography>
        }

        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <Box sx={{ maxWidth: { md: 200, xs: 'unset' }, width: '100%' }}>
            {isLoading ?
              <Skeleton variant="rectangular" animation="wave" width="100%" height="200px" />
              :
              <LazyImage src={authorInfo?.profileImage} height="100%" />
            }
          </Box>
          <Stack
            spacing={1}
            sx={{
              maxWidth: 560,
              width: '100%',
              mt: { xs: 2, sm: 0 }, ml: { xs: 0, sm: 3 }
            }}
          >
            <Typography variant="h2" sx={{ color: "#141414", fontWeight: 500 }}>
              {isLoading ? <Skeleton animation="wave" width="50%" /> : authorInfo?.name}
            </Typography>

            <Typography variant="subTitle3" sx={{ color: "#555" }}>
              {isLoading ?
                <Skeleton animation="wave" width="60%" />
                :
                <>{"Research Analyst"} <Typography variant="subTitle1" sx={{ color: "#141414" }}>@ Cryptonary</Typography></>
              }
            </Typography>

            <Typography variant="subTitle" sx={{ color: "#555" }}>
              {isLoading ?
                <>
                  <Skeleton animation="wave" width="90%" />
                  <Skeleton animation="wave" width="100%" />
                  <Skeleton animation="wave" width="60%" />
                </>
                :
                <ShowMoreText lines={3} expandByClick={false} more="">
                  {authorInfo?.bio}
                </ShowMoreText>
              }
            </Typography>

            {!updateStyle &&
              <Typography variant="subTitle" sx={{ color: "#141414", fontWeight: 500, pt: 2 }}>
                <Link
                  component={RouterLink}
                  to={`/author/${authorInfo?.id}`}
                  underline="hover"
                  sx={{ color: "#232A45", display: "flex", alignItems: "center" }}
                >
                  <Stack spacing={0.5} direction="row">
                    <Box>View latest articles from {authorInfo?.name}</Box>
                    <ArrowForwardRoundedIcon />
                  </Stack>
                </Link>
              </Typography>
            }
          </Stack>
        </Box>
      </Stack>
      {updateStyle &&
        <Typography variant="subTitle" sx={{ color: "#141414", fontWeight: 500 }}>
          <Link
            component={RouterLink}
            to={`/author/${authorInfo?.id}`}
            underline="hover"
            sx={{ color: "#232A45", display: "flex", alignItems: "center", justifyContent: 'flex-end' }}
          >
            <Stack spacing={0.5} direction="row">
              <Box>View latest articles from {authorInfo?.name}</Box>
              <ArrowForwardRoundedIcon />
            </Stack>
          </Link>
        </Typography>
      }
      {!remoteBottomDivider && <Divider sx={{ mt: 4 }} />}
      {showComments &&
        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FCFCFC",
              borderRadius: '4px'
            }}
            expanded={postComment}
            onChange={() => setPostComment(prev => !prev)}
            disableGutters
            elevation={0}
          >
            <AccordionSummary
              expandIcon={
                postComment ?
                  <Box sx={{ height: 20 }}>
                    <MdRemoveCircle style={{ fontSize: 20, color: '#141414' }} />
                  </Box> :
                  <Box sx={{ height: 20 }}>
                    <MdAddCircle style={{ fontSize: 20, color: '#141414' }} />
                  </Box>
              }
              sx={{
                background: postComment ? "#FFFFFF" : "",
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Typography variant="subTitle1" color="#141414" sx={{ ml: 2 }}>
                  Post a Comment
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#FFFFFF", px: { md: 6, xs: 2 } }} >
              <PostComment />
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "#FCFCFC",
              borderRadius: '4px'
            }}
            expanded={showCommentsAccordion}
            onChange={() => setShowCommentsAccordion(prev => !prev)}
            disableGutters
            elevation={0}
          >
            <AccordionSummary
              expandIcon={
                showCommentsAccordion ?
                  <Box sx={{ height: 20 }}>
                    <MdRemoveCircle style={{ fontSize: 20, color: '#141414' }} />
                  </Box> :
                  <Box sx={{ height: 20 }}>
                    <MdAddCircle style={{ fontSize: 20, color: '#141414' }} />
                  </Box>
              }
              sx={{
                background: showCommentsAccordion ? "#FFFFFF" : "",
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Typography variant="subTitle1" color="#141414" sx={{ ml: 2 }}>
                  Comments
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "#FFFFFF", pl: 6 }} >
              <Box></Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      }
    </Box>
  )
}

export default AuthorDetail
