'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-Constrenglogo.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            <strong>Constreng</strong> offers engineering  <strong>IT-services</strong>.
          </p>

          <p>
            Do you want to know more about me ? <strong>You can find my CV from <a href="https://karieronencv.herokuapp.com">Kari Eronen CV</a></strong>.
          </p>
            This web application is made by ReactJs.
          <p>
          </p>
        </footer>
      </div>
    );
  }
}
