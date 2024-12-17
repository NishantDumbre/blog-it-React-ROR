import React from "react";

const PostCard = ({ title, description, date }) => {
    
  return (
    <li className="border-b border-gray-300 py-4 ">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="mt-3 mb-2 line-clamp-2">{description}</p>
      <p className="text-xs text-slate-400">{date}</p>
    </li>
  );
};

export default PostCard;
