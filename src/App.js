import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import Jeopardy from './components/jeopardy/Jeopardy';

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
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/welcome/:name" component={Welcome} />
      <Route exact path="/jeopardy" component={Jeopardy} />
      <Route component={NoMatchPage} />
      </Switch>
      </div>
  );
}

export default App;
