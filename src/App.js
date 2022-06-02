import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/employee/list" component={Home} />
    </Switch>
  </div>
)

export default App
