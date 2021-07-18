import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Smarthive from './components/pages/Smarthive';
import SmarthiveApp from './components/pages/SmarthiveApp';
import Simpla from './components/pages/Simpla';
import Parafia from './components/pages/Parafia';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/portfolio' exact component={Portfolio}/>
          <Route path='/portfolio/smarthive' exact component={Smarthive}/>
          <Route path='/portfolio/smarthive-app' exact component={SmarthiveApp}/>
          <Route path='/portfolio/simpla' exact component={Simpla}/>
          <Route path='/portfolio/parafia' exact component={Parafia}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
