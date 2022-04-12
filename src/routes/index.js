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
import Author from 'pages/Author'
import MyFavourites from 'pages/MyFavourites'
import AuthedRoute from './AuthedRoute'
import VerifiedRoute from './VerifiedRoute'
import CproRoute from './CproRoute'
import PublicRoute from './PublicRoute'
import { Layout } from 'containers/Layout'
import ScrollToTop from 'react-router-scroll-top'
import TermsConditions from 'pages/TermsConditions'
import CookiePolicy from 'pages/CookiePolicy'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Checkout from 'pages/Checkout'

const routes = () => (
  <Router>
    <ScrollToTop>
      <Layout smallHeader={['/checkout']}>
        <Switch>
          <VerifiedRoute exact path='/' component={Home} />
          <VerifiedRoute exact path='/app' component={Landing} />
          <VerifiedRoute exact path='/checkout' component={Checkout} />
          <VerifiedRoute path='/news/:tab' component={News} />
          <VerifiedRoute exact path='/education' component={Education} />
          <VerifiedRoute exact path='/education/:level' component={Education} />
          <AuthedRoute path='/preference' component={Preference} />
          <PublicRoute path='/signup' component={Signup} />
          <PublicRoute path='/login' component={Login} />
          <Route path='/paywall' component={Paywall} />
          <Route path='/verify' component={Verify} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/reset-password' component={ResetPassword} />
          <AuthedRoute path='/video/:id' component={VideoDetail} />
          <VerifiedRoute path='/article/:id' component={ArticleDetail} />
          <VerifiedRoute exact path='/article' component={Article} />
          <AuthedRoute exact path='/author/:id' component={AuthorDetail} />
          <CproRoute path='/pulse' component={Pulse} />
          <AuthedRoute path='/account' component={Account} />
          <AuthedRoute path='/my-favourites' component={MyFavourites} />
          <Route exact path='/rating-guide' component={RatingsGuide} />
          <AuthedRoute exact path='/rating-guide/:symbol' component={CoinDetail} />
          <AuthedRoute exact path='/rating-guide/:symbol/:tab' component={CoinDetail} />
          <AuthedRoute path='/search-result' component={SearchResult} />
          <AuthedRoute path='/author' component={Author} />
          <Route path='/research-reports' component={ResearchReports} />
          <Route path='/analysis/:tab' component={Analysis} />
          <Route path='/terms-conditions' component={TermsConditions} />
          <Route path='/cookie-policy' component={CookiePolicy} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </Router>
)

export default (routes)
