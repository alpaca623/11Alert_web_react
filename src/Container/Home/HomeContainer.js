import React from "react";
import HomePresenter from "./HomePresenter";
import { requestDocumentsApi } from "../../api";

class HomeContainer extends React.Component {
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
    return <HomePresenter loading={loading} documents={documents} />;
  }
}

export default HomeContainer;
