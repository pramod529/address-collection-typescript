import React from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Address from './components/address.component';
import PropertyAddress from './components/property.address.component';
import EmploymentAddress from './components/employment.address.component';
import DisplayAllAddress from './components/display.address.component'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Address}  />
      <Route exact path='/propertyAddress' component={PropertyAddress}  />
      <Route exact path='/employmentAddress' component={EmploymentAddress}  />
      <Route exact path='/displayAllAddress' component={DisplayAllAddress}  />
    </Switch>
  </Router>
  )
}
export default App;
