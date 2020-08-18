import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  input = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  storeitem = (event) => {
    event.preventDefault();
    if (this.state.input.trim() === "") {
      alert("No input");
    } else {
      this.state.items.push(this.state.input);
      this.setState({ input: "" });
    }
  };

  dltitem = (key) => {
    const allitem = this.state.items;
    allitem.splice(key, 1);
    this.setState({
      items: allitem,
    });
  };

  render() {
    const { input } = this.state;

    return (
      <div className="todo-container">
        <form className="header" onSubmit={this.storeitem}>
          <h2>ToDo App</h2>
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.input}
            placeholder="Enter Items"
          />
        </form>

        <div className="list-container">
          <ul>
            {this.state.items.map((itms, key) => (
              <li key={key}>
                {itms}

                <i
                  className="fas fa-trash-alt"
                  onClick={() => this.dltitem(key)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
