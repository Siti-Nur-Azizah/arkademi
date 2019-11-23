import React, { Component } from"react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
           count: 0
            }
        };

handleClick() {
    this.setState({ count: this.state.count + 1});
    this.setState({ count: this.state.count - 1});
}

render() {
    return (
        <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.handleClick()}>Button</button>
        <button onClick={() => this.handleClick()}>Button</button>
        </div>
    );
  }
}

export default App;