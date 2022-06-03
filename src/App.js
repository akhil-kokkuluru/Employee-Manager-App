import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import RegistrationForm from './registrationForm'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/employee/list" component={Home} />
      <Route exact path="/employee/add" component={RegistrationForm} />
    </Switch>
  </div>
)

export default App
