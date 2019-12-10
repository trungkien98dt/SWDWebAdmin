import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu.js';
import routes from './routes';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
                  <Menu></Menu>
                  <div className="contents">
                      {this.showContentMenu(routes)}
                  </div>
          </BrowserRouter>
      );
  }

  showContentMenu = (routes) => {
      var result = null;
      if (routes.length > 0) {
          result = routes.map((route, index) => {
              return(<Route
                  key = {index}
                  path = {route.path}
                  exact = {route.exact}
                  component = {route.main}
              />); 
          });
      }
      return <Switch>{result}</Switch>;
  }
}

export default App;
