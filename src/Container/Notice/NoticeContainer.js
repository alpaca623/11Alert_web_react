import React from "react";
import NoticePresenter from "./NoticePresenter";
import { readDocumentApi, deleteDocumentApi } from "../../api";

class NoticeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      document: {}
    };
  }

  componentDidMount = async () => {
    let document;
    try {
      ({ data: document } = await this.requestDocument());
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        loading: false,
        document
      });
    }
  };

  requestDocument = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return readDocumentApi(id);
  };

  requestDocumentDelete = async id => {
    try {
      await deleteDocumentApi(id);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { loading, document } = this.state;
    return (
      <NoticePresenter
        loading={loading}
        document={document}
        requestDocumentDelete={this.requestDocumentDelete}
      />
    );
  }
}

export default NoticeContainer;
