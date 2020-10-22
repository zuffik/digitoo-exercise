import * as React from "react";
import { Route, Switch } from "react-router";
import { LandingPage } from "../../../pages/LandingPage";
import { Routes } from "../../../../services/routes/Routes";

interface Props {}

export const MainRouterLayout: React.FC<Props> = (props: Props) => {
  return (
    <Switch>
      <Route path={Routes.home()} exact>
        <LandingPage />
      </Route>
    </Switch>
  );
};
