import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main, TestLandingLayout } from './layouts';

import {
  Dashboard,
  Auth,
  Landing,
  Forums,
  ForumSection,
  Post,
  Profile,
  MyProfile,
  // Dummy,
  CreatePost,
  Settings
} from './views';

// import PropTypes from 'prop-types';

const Routes = props => {
  return (
    <Switch>
      <Redirect exact from="/" to="/Dashboard" />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={Main}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Settings}
        exact
        layout={Main}
        path="/settings"
      />
      <RouteWithLayout
        component={MyProfile}
        exact
        layout={Main}
        path="/profile/me"
      />
      <RouteWithLayout
        component={Profile}
        exact
        layout={Main}
        path="/profile/:profileSlug"
      />

      <RouteWithLayout component={Auth} exact layout={Main} path="/auth" />
      {/* === TEST LANDING === */}
      <RouteWithLayout
        component={Landing}
        exact
        layout={TestLandingLayout}
        path="/landing"
      />
      {/**PRIVATE ROUTE IN PROGRESS */}
      <RouteWithLayout component={Forums} exact layout={Main} path="/Forums" />
      <RouteWithLayout
        component={ForumSection}
        exact
        layout={Main}
        path="/forums/:forumSlug"
      />
      <RouteWithLayout
        component={CreatePost}
        exact
        layout={Main}
        path="/forums/:forumSlug/createpost"
      />
      {/**create post page */}
      <RouteWithLayout
        component={Post}
        exact
        layout={Main}
        path="/forums/:forumSlug/:postSlug"
      />
      {/* <RouteWithLayout
        component={Dummy}
        exact
        layout={Main}
        path="/Dummy"
      /> */}
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
