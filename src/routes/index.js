import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Sign from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';

import FormMeetup from '~/pages/FormMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />

      <Route path="/meetupsForm" component={FormMeetup} isPrivate />
    </Switch>
  );
}
