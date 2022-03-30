import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
} from '@mui/material'
import { Footer } from 'containers/Footer'
import AuthorList from './AuthorList'
import { getAuthorsList } from 'redux/modules/article/actions'

const Author = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const loadData = useCallback(() => {
    setIsLoading(true)
    dispatch(getAuthorsList({
      params: {
        page,
        perPage: 5,
      },
      success: () => {
        setIsLoading(false)
      }
    }))
  }, [dispatch, page])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <Container maxWidth="xl">
      <AuthorList isLoading={isLoading} page={page} setPage={setPage} />
      <Footer />
    </Container>
  )
}

export default Author
