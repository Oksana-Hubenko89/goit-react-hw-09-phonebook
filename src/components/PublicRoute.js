import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
export default function PrivateRoute({
 path,
  redirectTo,
  children,
  ...routeProps
}) { 
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route
      {...routeProps}>
      {isAuthenticated && routeProps.restricted ? <Redirect to={!isAuthenticated?path:redirectTo} /> : (children)
      }
    </Route>
  );
};
