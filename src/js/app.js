import "babelify/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import { Nav } from './components/nav';


@Radium
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav green={true} />
        React Browserify Boilerplate
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
