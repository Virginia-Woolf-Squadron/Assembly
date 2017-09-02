import React from 'react'
import {
  Route, 
  BrowserRouter as Router
} from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import axios from 'axios'
import PortfolioLanding from './Simulator/PortfolioLanding.js'
import PortfolioPage from './Simulator/PortfolioPage.js'
import CurrInfo from './CurrInfo.jsx'
import LeaderBoard from './LeaderBoard.jsx'
import LoginPage from './LoginPage.js'


export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <Router>

        <div>
          {localStorage.getItem('token') ? <Route exact path='/' render={() => <PortfolioLanding />} /> : <Route exact path='/' render={() => <LandingPage />} />}
          <Route path='/currency/:ticker' render={() => <CurrInfo />} />
          <Route path='/simulator/:portfolioId' render={(props) => <PortfolioPage userInfo={props}/>} />
          <Route exact path='/leaderboard' render={(props) => <LeaderBoard userInfo={props} />} />
          <Route exact path='/login' render={() => <LoginPage />} />
        </div>

      </Router>

    )
  }
}