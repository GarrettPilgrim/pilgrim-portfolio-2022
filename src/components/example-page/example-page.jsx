import React from "react";
import './example-page.scss';

class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="example-page">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default ExamplePage;