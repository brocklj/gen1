// @flow
import * as React from "react";

type IndexProps = {|
  data: Object
|};
type IndexState = {};

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>GEN1</p>;
  }
}

export default Index;
