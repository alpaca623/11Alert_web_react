import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { readDocumentApi } from "../../api";

const Container = styled.div`
  width: 700px;
  height: 500px;
  border: 1px solid black;
  margin: 20px;
`;

const DocumentUl = styled.ul``;

const DocumentLi = styled.li``;

const DocumentTitle = styled.p``;

class WeeklyNotice extends React.Component {
  render() {
    const { documents } = this.props;
    return (
      <Container>
        <DocumentUl>
          {documents ? (
            documents.map(document => (
              <DocumentLi key={document._id}>
                <Link to={`/document/${document._id}`}>
                  <DocumentTitle>{document.title}</DocumentTitle>
                </Link>
              </DocumentLi>
            ))
          ) : (
            <DocumentLi>
              <DocumentTitle>{`공지사항이 없습니다.`}</DocumentTitle>
            </DocumentLi>
          )}
        </DocumentUl>
      </Container>
    );
  }
}

export default WeeklyNotice;
