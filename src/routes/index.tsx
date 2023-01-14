import React, { lazy } from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
// import LoadingPlaceholder from '../components/LoadingPlaceHolder';

export const NamedRoutes = {
  Landing: "/",
}

const Landing = lazy(() => import("../pages/Landing"));


const AppRoutes = () => (
  <BrowserRouter>
    <React.Suspense fallback={<></>}>
      <Switch>
        <Route exact path={NamedRoutes.Landing} component={Landing} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default AppRoutes;
