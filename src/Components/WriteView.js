import React from "react";
import styled from "styled-components";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createDocumentApi, readDocumentApi } from "../api";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  // align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 0.5em;
  border: 1px solid #eee;
  margin-bottom: 10px;
`;

const SelectBox = styled.select``;

const ContentContainer = styled.div``;

const BottomPlace = styled.div``;

const SubmitBtn = styled.button``;

const CancleBtn = styled.button``;

class WriterView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subTitle: "",
      content: "",
      type: "",
      createAt: ""
    };
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    console.log(id);
    if (id) {
      this.readDocument(id);
    } else {
      this.setState({
        title: "",
        subTitle: "",
        content: "",
        type: "",
        createAt: ""
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { title, subTitle, content, type } = this.state;
    const data = { title, subTitle, content, type };
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (type === "") {
      alert("문서 종류를 선택해주세요");
      return;
    }
    // console.log(data);
    try {
      createDocumentApi(data);
    } catch (e) {
      console.log(e);
    }
  };

  readDocument = async id => {
    const {
      data: { _id, title, content, createAt, type }
    } = await readDocumentApi(id);
    console.log(_id, title, content, createAt, type);
    this.setState({ _id, title, content, createAt });
  };
  render() {
    const { history } = this.props;
    return (
      <Container>
        <TextContainer>
          <TextInput
            type="text"
            name="title"
            size="80"
            placeholder="제목을 입력하세요"
            onChange={this.handleChange}
            value={this.state.title !== "" ? this.state.title : ""}
          />
        </TextContainer>
        <SelectBox name="type" onChange={this.handleChange}>
          <option>--선택--</option>
          <option value="1">관리사무소</option>
          <option value="2">우리주식회사</option>
        </SelectBox>
        <ContentContainer>
          <CKEditor
            editor={ClassicEditor}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
              // editor.setData();
            }}
            onChange={(event, editor) => {
              this.setState({
                content: editor.getData()
              });
            }}
          />
        </ContentContainer>
        <BottomPlace>
          <SubmitBtn onClick={this.handleSubmit}>글 작성</SubmitBtn>
          <CancleBtn onClick={() => history.goBack()}>취소</CancleBtn>
        </BottomPlace>
      </Container>
    );
  }
}

export default WriterView;
