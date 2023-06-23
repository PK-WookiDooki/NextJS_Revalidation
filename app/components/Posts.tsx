import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold dark:text-white/80">Blogs</h2>
      <ul className="w-full">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default Posts;
