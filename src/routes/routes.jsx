import * as React from 'react';
import { Route, Redirect } from 'react-router';
import {
  BASE_ROUTE,
  LOGIN_ROUTE,
  TIMELINE_ROUTE,
} from './../constants/Routes';
import Login from '../modules/authentication/screens/Login';
import Timeline from '../modules/timeline/screens/Timeline';
import requireAuthentication from './authentication/authentication';
import App from './../containers/App';

export default (
  <Route path={BASE_ROUTE} component={App}>
    <Route path={LOGIN_ROUTE} component={requireAuthentication(Login, false)} />
    <Route path={TIMELINE_ROUTE} component={requireAuthentication(Timeline, true)} />
    <Redirect from="/*" to={LOGIN_ROUTE} />
  </Route>
);
