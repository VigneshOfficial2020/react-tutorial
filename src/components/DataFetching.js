import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(1);
  const [fetchPostId, setFetchPostId] = useState(1);

  const handleFetchClick = () => {
    setFetchPostId(postId);
  };

  useEffect(() => {
    console.log("useEffect  is called");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchPostId}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        alert("Failed to fetch data");
        console.log(err);
      });
  }, [fetchPostId]);

  return (
    <div>
      <input
        type="text"
        value={postId}
        id="post"
        onChange={(e) => {
          setPostId(e.target.value);
        }}
      />
      <button onClick={handleFetchClick}>Get Post</button>
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>(post.title)</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
