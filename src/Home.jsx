import axios from "axios";
import { useState, useEffect } from "react";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  // const [errors, setErrors] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  // const handleCreatePost = (params) => {
  //   axios.post("http://localhost:3000/posts.json", params).then((response) => {
  //     setPosts([...posts, response.data]);
  // });
  // .catch((errors) => {
  //   console.log(error.response.data.errors);
  //   setErrors(error.response.data.errors);
  // });
  // };

  const handleUpdatePost = (id, params) => {
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then((response) => {
      console.log(response.data);
      setIsPostsShowVisible(false);
      setPosts(
        posts.map((post) => {
          if (post.id === id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete("http://localhost:3000/posts/" + post.id + ".json").then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Login />
      <LogoutLink />
      <Signup />
      {/* <PostNew onCreatePost={handleCreatePost} /> */}
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
