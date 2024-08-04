import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import ReservaMesa from './ReservaMesa';

function App() {
  return (
    <Router>
      <div className="container text-center">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reservar-mesa" component={ReservaMesa} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
