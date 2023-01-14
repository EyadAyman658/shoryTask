// @ts-nocheck
import React, { FC } from "react";
import { Route } from "react-router-dom";
import RouteWrapperInterface from "./interface";

const RouteWrapper: FC<RouteWrapperInterface> = ({
  component: Component,
  layout: Layout,
  ...rest
}): JSX.Element => {
  return <>
      <Route {...rest} render={(props) => {
        return (
          <Layout  {...(props)}>
            <Component {...props}  />
          </Layout>)
      }} />
  </>
};

export default React.memo(RouteWrapper);

