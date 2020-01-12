import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './containers/Home'
import Detail from './containers/Detail'

const GlobalStyles = createGlobalStyle`
    ${ reset }
`

const App: React.FC = () => {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/movie/:id" component={ Detail } />
          </Switch>
          <Footer />
          <GlobalStyles />
      </Router>
  )
}

export default App
