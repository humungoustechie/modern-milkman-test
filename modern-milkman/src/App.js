import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './containers/Home/Home'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default App
