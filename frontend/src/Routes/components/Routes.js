import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Photo = lazy(() => import("../../Photo"));

const Routes = () => (
  <Suspense
    fallback={
      <div className="route-loading">
        <h1>Loading...</h1>
      </div>
    }
  >
    <Switch>
      <Route exact path="/">
        <Redirect to="/photo" />
      </Route>
      <Route path="/photo" exact component={Photo} />
    </Switch>
  </Suspense>
);

export default Routes;
