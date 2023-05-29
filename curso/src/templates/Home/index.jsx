import { useState, useEffect, useCallback } from "react";

import "./style.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/loadPosts";
import { Button } from "../../components/Button/index";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [posts, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPost(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPost(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}

        <TextInput seachValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem posts</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text={"Load more posts"}
            method={loadMorePosts}
          />
        )}
      </div>
    </section>
  );
};

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 2,
//     seachValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postsPerPage, posts, allPosts } = this.state;

//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({
//       posts,
//       page: nextPage,
//     });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ seachValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, seachValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!seachValue
//       ? allPosts.filter((post) => {
//           return post.title
//             .toLowerCase()
//             .includes(seachValue.toLocaleLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="search-container">
//           {!!seachValue && <h1>Search Value: {seachValue}</h1>}

//           <TextInput seachValue={seachValue} handleChange={this.handleChange} />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
//         {filteredPosts.length === 0 && <p>Não existem posts</p>}

//         <div className="button-container">
//           {!seachValue && (
//             <Button
//               disabled={noMorePosts}
//               text={"Load more posts"}
//               metod={this.loadMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }
