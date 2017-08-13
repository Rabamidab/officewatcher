import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import App from './App'
import Camera from './Camera'
import Welcome from './Welcome'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/app' component={App}/>
        <Route path='/camera' component={Camera}/>
      </Switch>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root