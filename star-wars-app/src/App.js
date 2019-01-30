import React, { Component } from 'react';
import Peoples from './components/people/Peoples';
import Navigation from './components/navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import Planets from './components/planets/Planets';
import Starships from './components/starships/Starships';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <Navigation />
          <Switch>
            <Route path="/people" component={Peoples} />
            <Route path="/planets" component={Planets} />
            <Route path="/starships" component={Starships} />
          </Switch>
        </div>
    );
  }
}

export default App;
