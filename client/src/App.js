import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"

import Nav from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import SearchPage from "./pages/SearchPage"
import SavedPage from "./pages/SavedPage"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron >
          <h1>Google Books Search</h1>
          <h6>Keep track of your favorite stories</h6>
        </Jumbotron>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
