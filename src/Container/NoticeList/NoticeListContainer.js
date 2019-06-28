import React from "react";
import NoticeListPresenter from "./NoticeListPresenter";
import { requestDocumentsApi } from "../../api";

class NoticeListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      documents: []
    };
  }
  componentDidMount = async () => {
    let documents;
    try {
      ({ data: documents } = await this.requestDocuments());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
        documents
      });
    }
  };

  requestDocuments = () => {
    return requestDocumentsApi();
  };

  render() {
    const { loading, documents } = this.state;
    return <NoticeListPresenter documents={documents} loading={loading} />;
  }
}

export default NoticeListContainer;
