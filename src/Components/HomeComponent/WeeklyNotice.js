import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { readDocumentApi } from "../../api";
import { routes } from "../../routes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px;
  width: 700px;
  height: 500px;
  border: 1px solid black;
  margin: 20px;
`;

const DocumentListBtn = styled.div`
  color: blue;
  margin: 20px 0;
`;

const DocumentUl = styled.ul``;

const DocumentLi = styled.li`
  margin: 10px 0;
`;

const DocumentTitle = styled.p``;

class WeeklyNotice extends React.Component {
  render() {
    const { documents } = this.props;
    return (
      <Container>
        <DocumentListBtn>
          <Link to={`${routes.document}${routes.documentList}`}>
            <h3>공지사항 전체 보기</h3>
          </Link>
        </DocumentListBtn>
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
