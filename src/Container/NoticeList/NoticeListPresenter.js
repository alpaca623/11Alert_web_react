import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Container = styled.div``;

const ContainerTitle = styled.h1``;

const DocumentList = styled.ul``;

const DocumentColumn = styled.li``;

const DocumentTitle = styled.h5``;

const NoticeListPresenter = props => {
  const { loading, documents } = props;
  return (
    <Container>
      <ContainerTitle>전체 공지사항</ContainerTitle>
      {!loading && Array.isArray(documents) && documents ? (
        <DocumentList>
          {documents.map(document => (
            <DocumentColumn key={document._id}>
              <DocumentTitle>
                <Link to={`${routes.document}/${document._id}`}>
                  {document.title}
                </Link>
              </DocumentTitle>
            </DocumentColumn>
          ))}
        </DocumentList>
      ) : (
        <DocumentList>
          <DocumentColumn>공지사항이 없습니다.</DocumentColumn>
        </DocumentList>
      )}
    </Container>
  );
};

export default NoticeListPresenter;
