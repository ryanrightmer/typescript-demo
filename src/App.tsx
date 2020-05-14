import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Layout from './components/layout';
import store from './store/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
