import React from "react";
import styled from "styled-components";

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
  border:1px solid black;
`;

const WeeklyNotice = styled.div`
  width: 700px;
  height: 500px;
  border: 1px solid black;
  margin: 20px;
`;

const NoticeList = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items:center;
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
  border:1px solid black;
`;

const HomePresenter = props => {
  return (
    <Container>
      <Header>
        <LeftHeader>left</LeftHeader>
        <CenterHeader>center</CenterHeader>
        <RightHeader>right</RightHeader>
      </Header>
      <Content>
        <TopContent>
          <WeeklyNotice>이번주 공지사항</WeeklyNotice>
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
