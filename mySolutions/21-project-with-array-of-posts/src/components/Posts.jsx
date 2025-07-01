import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  console.log(posts);
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
