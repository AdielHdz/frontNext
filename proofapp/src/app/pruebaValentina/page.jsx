import React from "react";
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function PruebaValentina() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col  items-center h-screen">
      <h1 className="text-white">Posts</h1>
      <section>
        {posts.slice(0, 5).map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-4 mb-4 w-[600px] h-[100px]">
            <h2 className="text-white font-bold text-sm">{post.title}</h2>
            <p className="text-white text-sm">{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
