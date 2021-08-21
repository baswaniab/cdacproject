import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomeScreen'
import Navbar from './Navbar'
import Kitchen from './KitchenView'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Kitchen/:id">
          <Kitchen />
        </Route>
      </Switch>
    </Router>
    // <Home/>
  );
}

export default App;
