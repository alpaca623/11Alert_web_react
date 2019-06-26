import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./Container/Home";
import NoticeContainer from "./Container/Notice";
import WriterView from "./Components/WriteView";
import { routes } from "./routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={routes.home} exact component={HomeContainer} />
        <Route path={routes.write} component={WriterView} />
        <Route path={`${routes.document}/:id`} component={NoticeContainer} />
      </Router>
    );
  }
}

export default App;
