import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import Room from './Room';
import RoomsCatalog from './RoomsCatalog';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/catalog" component={RoomsCatalog} />
        <Route path="/room/:id" component={Room} />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
