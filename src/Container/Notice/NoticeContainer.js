import React from "react";
import NoticePresenter from "./NoticePresenter";
import { readDocumentApi } from "../../api";

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
      // ({data} = await this.requestDocument())
      console.log(await this.requestDocument());
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        loading: false
        // document
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

  render() {
    const { loading, document } = this.state;
    return <NoticePresenter />;
  }
}

export default NoticeContainer;
