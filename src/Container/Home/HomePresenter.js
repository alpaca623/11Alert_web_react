import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import WeeklyNotice from "../../Components/HomeComponent/WeeklyNotice";
import { routes } from "../../routes";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

/**
 * Content
 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const NoticeList = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const NoticeColumn = styled.div`
  width: 240px;
  height: 230px;
  border: 1px solid black;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const HomePresenter = props => {
  const { loading, documents } = props;
  return (
    <Container>
      <Content>
        <TopContent>
          <WeeklyNotice loading={loading.toString()} documents={documents} />
          <NoticeList>
            <NoticeColumn>성포동</NoticeColumn>
            <NoticeColumn>관리사무소</NoticeColumn>
            <NoticeColumn>우리주식회사</NoticeColumn>
            <NoticeColumn>그 외</NoticeColumn>
          </NoticeList>
        </TopContent>
        <BottomContent>Empty Box</BottomContent>
      </Content>
    </Container>
  );
};

export default HomePresenter;
