import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Header from './components/Header'

import Home from './containers/Home'
import TV from './containers/TV'
import Detail from './containers/Detail'

const GlobalStyles = createGlobalStyle`
    ${ reset }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: rgba(20, 20, 20, 1);
    }
`

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const App: React.FC = () => {
  return (
      <Container>
          <Router>
              <Header />
              <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/tv" component={ TV } />
                  <Route path="/movie/:id" component={ Detail } />
                  <Route path="/tv/:id" component={ Detail } />
              </Switch>
          </Router>
          <GlobalStyles />
      </Container>
  )
}

export default App
