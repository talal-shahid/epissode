import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Home from "./home";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";

class App extends Component {
  render() {
    return (
      <div className="container main_container">
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
