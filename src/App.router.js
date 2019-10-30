import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Page404 } from "pages";
import Auth from 'utils/auth';

// const withAuthentication = (TrueComponent) => {
//   const ProtectedComponent = () => {
//     return Auth.isAuthenticated ? (
//       <Route path="/information" component={TrueComponent} />
//     ) : (
//       <Redirect to="/" />
//     );
//   }
//   return ProtectedComponent;
// }

const AppRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={HomePage} /> */}
    <Route component={Page404} />
  </Switch>
)

export default AppRouter;