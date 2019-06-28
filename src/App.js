import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

import { routes } from "./routes";
import HomeContainer from "./Container/Home";
import NoticeContainer from "./Container/Notice";
import WriterView from "./Components/WriteView";
import NoticeListContainer from "./Container/NoticeList";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
/**
 * Header
 */

const Header = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;

  height: 70px;
`;

const LeftHeader = styled.div``;
const CenterHeader = styled.div``;
const RightHeader = styled.div``;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Header>
            <LeftHeader>메뉴</LeftHeader>
            <CenterHeader>
              <Link to={routes.home}>Home</Link>
            </CenterHeader>
            <RightHeader>
              <Link to={`${routes.documentWrite}`}>
                글쓰기
              </Link>
            </RightHeader>
          </Header>
          <Route path={routes.home} exact component={HomeContainer} />
          <Switch>
            <Route path={`${routes.documentWrite}`} component={WriterView} />
            <Route path={`${routes.documentEdit}/:id`} component={WriterView} />
            <Route
              path={`${routes.documentList}`}
              component={NoticeListContainer}
            />
            <Route
              path={`${routes.document}/:id`}
              component={NoticeContainer}
            />
            <Route exact path={routes.document} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
