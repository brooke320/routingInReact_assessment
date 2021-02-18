import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
// import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import './App.css';

let NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route 
      exact 
      path="/" 
      render={(props) => <Welcome {...props} name="Brooke"/>} 
      />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/welcome/:name" component={Welcome} />
      <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
}

export default App;
