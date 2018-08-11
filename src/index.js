import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import NavBar from './components/navbar';
import VehiclesIndex from './components/vehicles_index';
import VehicleDetail from './components/vehicle_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/vehicles/:id" component={VehicleDetail} />
          <Route path="/" component={VehiclesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
