import "./style.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";

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
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
