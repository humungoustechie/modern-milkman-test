import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import HowItWorks from './containers/HowItWorks/HowItWorks'
import Products from './containers/Products/Products'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/how" exact component={HowItWorks} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
