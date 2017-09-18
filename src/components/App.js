import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import Navigation from './Navigation'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import Camera from './Camera'
import Welcome from './Welcome'

const App = () => (
  <div>
    <Navigation />
    <AddTodo />
    <VisibleTodoList />
    <Switch>
      <Route exact path='/welcome' component={Welcome}/>
      <Route path='/camera' component={Camera}/>
    </Switch>
    <Footer />
  </div>
)

export default App
