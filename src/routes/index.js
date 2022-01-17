import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Education from 'pages/Education'
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
import Pulse from 'pages/Pulse'
import Landing from 'pages/Landing'
import Paywall from 'pages/Paywall'
import Account from 'pages/Account'
import AuthedRoute from './AuthedRoute'
import PublicRoute from './PublicRoute'
import { Layout } from 'containers/Layout'


const routes = () => (
  <Router>
    <Layout>
      <Route exact path='/' component={Landing} />
      <Route exact path='/app' component={Landing} />
      <Route exact path='/education' component={Education} />
      <AuthedRoute path='/preference' component={Preference} />
      <PublicRoute path='/signup' component={Signup} />
      <PublicRoute path='/login' component={Login} />
      <Route path='/paywall' component={Paywall} />
      <AuthedRoute path='/verify' component={Verify} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/reset-password' component={ResetPassword} />
      <AuthedRoute path='/video-detail' component={VideoDetail} />
      <Route exact path='/article/:id' component={ArticleDetail} />
      <Route exact path='/article' component={Article} />
      <AuthedRoute exact path='/author/:id' component={AuthorDetail} />
      <AuthedRoute path='/pulse' component={Pulse} />
      <AuthedRoute path='/account' component={Account} />
    </Layout>
  </Router>
)

export default (routes)
