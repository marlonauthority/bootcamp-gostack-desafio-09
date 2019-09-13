import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sign from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';

import MeetappForm from '~/pages/Form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Details} />

      <Route path="/meetups/create" component={MeetappForm} />
      <Route path="/meetups/edit/:id" component={MeetappForm} />
    </Switch>
  );
}
