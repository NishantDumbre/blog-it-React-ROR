import React from "react";
import PostCard from "./PostCard";

const PostsList = ({ data }) => {
  console.log(data);

  return (
    <ul>
      {data.map((post) => {
        return <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.created_at}
        />;
      })}
    </ul>
  );
};

export default PostsList;
