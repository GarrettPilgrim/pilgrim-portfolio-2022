import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles.scss';
import './base.scss'


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <>
        <App />
       </>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);