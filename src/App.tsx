import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Layout from './components/layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Layout />
      </Switch>
    </Router>
  );
}

export default App;
