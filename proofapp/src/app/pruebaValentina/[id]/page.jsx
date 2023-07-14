import React from "react";

export default function Post({ params }) {
  const { id } = params;
  return (
    <div>
      <h1 className="text-white">Post {id}</h1>
    </div>
  );
}
