import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import News from 'pages/News'
import RatingsGuide from 'pages/RatingsGuide'
import PageNotFound from 'pages/PageNotFound'
import CoinDetail from 'pages/CoinDetail'
import SearchResult from 'pages/SearchResult'
import ResearchReports from 'pages/ResearchReports'
import Analysis from 'pages/Analysis'
import AuthedRoute from './AuthedRoute'
import CproRoute from './CproRoute'
import PublicRoute from './PublicRoute'
import { Layout } from 'containers/Layout'
import ScrollToTop from 'react-router-scroll-top'

const routes = () => (
  <Router>
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/app' component={Landing} />
          <Route exact path='/news' component={News} />
          <Route exact path='/education' component={Education} />
          <Route exact path='/education/:level' component={Education} />
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
          <CproRoute path='/pulse' component={Pulse} />
          <AuthedRoute path='/account' component={Account} />
          <CproRoute exact path='/rating-guide' component={RatingsGuide} />
          <AuthedRoute path='/rating-guide/:symbol' component={CoinDetail} />
          <AuthedRoute path='/search-result' component={SearchResult} />
          <Route path='/research-reports' component={ResearchReports} />
          <Route path='/analysis' component={Analysis} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </Router>
)

export default (routes)
