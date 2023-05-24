import { Component } from "react";

import './style.css'

export class Button extends Component {
  render() {
    const {text, metod, disabled} = this.props
  
    return (
    <button disabled={disabled} className="button" onClick={metod}>{text}
    </button>
    );
  }
}
