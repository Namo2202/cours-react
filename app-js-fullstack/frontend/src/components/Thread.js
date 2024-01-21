import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";

const Thread = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    axios
      .get("http://localhost:5000/post/")
      .then((res) => dispatch(getPosts(res.data)));
  }, []);
  return (
    <div className="thread-container">
      {posts &&
        posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Thread;
