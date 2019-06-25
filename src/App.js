import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./Container/Home";
import WriterView from "./Components/WriteView";
import { routes } from "./routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={routes.home} exact component={HomeContainer} />
        <Route path={routes.write} component={WriterView} />
      </Router>
    );
  }
}

export default App;
