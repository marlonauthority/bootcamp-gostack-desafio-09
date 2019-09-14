import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import store from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // -> logado?
  const { signed } = store.getState().auth;
  // -> Não esta logado e a rota é privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  // -> está logado, e a rota não é privada
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // -> Define o layout baseado se a rota é privada ou nao
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
