import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Loader from '../components/atoms/Loader/Loader';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loading = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

const Room = Loadable({
  loader: () => import('./Room'),
  loading: Loading,
});

const RoomsCatalog = Loadable({
  loader: () => import('./RoomsCatalog'),
  loading: Loading,
});

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
