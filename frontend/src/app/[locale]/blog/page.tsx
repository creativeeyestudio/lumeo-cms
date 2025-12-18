import { getPosts } from "@/lib/getPost";
import React from "react";

const Posts = async () => {
  const data = await getPosts();

  return <div>Posts</div>;
};

export default Posts;
