import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const DocumentTitle = styled.h2`
  margin: 20px 0;
`;

const DocumentContent = styled.div``;

const DocumentEditBtn = styled.button``;

const DocumentDeleteBtn = styled.button``;
/**
 *
 * @param {*} props
 * dangerouslySetInnerHTML 속성을 이용해 html을 렌더링하였다.
 */
const NoticePresenter = props => {
  const { loading, document, requestDocumentDelete } = props;

  return !loading && document ? (
    <Container>
      <DocumentTitle>{document.title}</DocumentTitle>
      <DocumentContent dangerouslySetInnerHTML={{ __html: document.content }} />
      <DocumentEditBtn>
        <Link to={`${routes.documentEdit}/${document._id}`}>글 수정</Link>
      </DocumentEditBtn>
      <DocumentDeleteBtn onClick={() => requestDocumentDelete(document._id)}>
        글 삭제
      </DocumentDeleteBtn>
    </Container>
  ) : (
    <Container>잘못된 문서</Container>
  );
};

export default NoticePresenter;
