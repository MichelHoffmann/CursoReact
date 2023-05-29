import "./style.css";

export const Button = ({text, method, disabled}) => {
  return (
    <button disabled={disabled} className="button" onClick={method}>
      {text}
    </button>
  );
};

// export class Button extends Component {
//   render() {
//     const {text, metod, disabled} = this.props

//     return (
//     <button disabled={disabled} className="button" onClick={metod}>{text}
//     </button>
//     );
//   }
// }
