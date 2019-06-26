import React from "react";
import styled from "styled-components";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createDocumentApi } from "../api";

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
      content: ""
    };
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { title, subTitle, content } = this.state;
    const data = { title, subTitle, content };
    createDocumentApi(data);
  };
  render() {
    return (
      <Container>
        <TextContainer>
          <TextInput
            type="text"
            name="title"
            size="80"
            placeholder="제목을 입력하세요"
            onChange={this.handleChange}
          />
        </TextContainer>
        <ContentContainer>
          <CKEditor
            editor={ClassicEditor}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
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
          <CancleBtn onClick={() => alert("취소!")}>취소</CancleBtn>
        </BottomPlace>
      </Container>
    );
  }
}

export default WriterView;
