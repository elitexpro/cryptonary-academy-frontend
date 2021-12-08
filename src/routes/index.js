import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Signup from 'pages/Signup'
import Login from 'pages/Login'
import Verify from 'pages/Verify'
import ForgotPassword from 'pages/ForgotPassword'
import ResetPassword from 'pages/ResetPassword'
import Preference from 'pages/Preference'
import VideoDetail from 'pages/VideoDetail'
import ArticleDetail from 'pages/ArticleDetail'
import Article from 'pages/Article'
import AuthorDetail from 'pages/AuthorDetail'
import Landing from 'pages/Landing'
// import AuthedRoute from './AuthedRoute'
import PublicRoute from './PublicRoute'
import { Layout } from 'containers/Layout'


const routes = () => (
  <Router>
    <Layout>
      <Route exact path='/' component={Landing} />
      <Route path='/app' component={Home} />
      <Route path='/preference' component={Preference} />
      <PublicRoute path='/signup' component={Signup} />
      <PublicRoute path='/login' component={Login} />
      <Route path='/verify' component={Verify} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/video-detail' component={VideoDetail} />
      <Route path='/article-detail' component={ArticleDetail} />
      <Route path='/article' component={Article} />
      <Route path='/author-detail' component={AuthorDetail} />
    </Layout>
  </Router>
)

export default (routes)
