import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../components/ui/Layout";
import TechnologiesScreen from "../components/technologies/TechnologiesScreen";

const ChechefRouter = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/app/technologies" component={TechnologiesScreen} />
          <Redirect to="/app/technologies" />
        </Switch>
      </Layout>
    </div>
  );
};

export default ChechefRouter;
