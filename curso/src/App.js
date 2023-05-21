import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      imgUrl: [],
      posts: [
        // {
        //   id: 1,
        //   name: "Michel",
        //   cargo: "Software Engineer",
        // },
        // {
        //   id: 2,
        //   name: "Lorrana",
        //   cargo: "Engenheira Agronoma",
        // },
        // {
        //   id: 3,
        //   name: "Raika",
        //   cargo: "Princesa do Papai",
        // },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((post) => this.setState({ posts: post }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
