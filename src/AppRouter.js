import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReposList from './reposList';

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={ReposList} />
    </div>
  </Router>
);

export default AppRouter;
