import { Component } from "react";

export class Button extends Component {
  render() {
    return (
    <button onClick={this.props.metod}>{this.props.text}
    </button>
    );
  }
}
