import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './src/Components/Home'

function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}  

export default rrouter