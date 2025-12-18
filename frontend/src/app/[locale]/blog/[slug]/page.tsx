import React from "react";

export type CurrentPostParams = Promise<{
  locale: string;
  slug: string;
}>;

const Post = async (props: { params: CurrentPostParams }) => {
  const { locale, slug } = await props.params;
  
  return <div>Post</div>;
};

export default Post;
