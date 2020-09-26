import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Messages from "pages/Messages";

const AppRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Messages} />
    </Switch>
  );
};

export default AppRouter;
