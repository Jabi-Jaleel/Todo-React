import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={TodoApp} />
      <Route path="/about" component={About} />
    </Router>
  );
};
