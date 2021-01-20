import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Map as MapView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={MapView}
        exact
        layout={MinimalLayout}
        path="/map"
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MainLayout}
        path="/sell"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/404"
      />
      <Redirect to="/404" status="404" />
    </Switch>
  );
};

export default Routes;
