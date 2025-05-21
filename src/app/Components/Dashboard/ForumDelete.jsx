"use client";

import { useEffect, useState } from "react";

export default function ForumDelete() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all forum posts on load
  useEffect(() => {
    fetch("/api/getForums")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load posts:", err);
        setLoading(false);
      });
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`/api/deleteForums?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Forum Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post._id}
              className="border rounded-xl p-4 shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">{post.name}</h2>
                <p className="text-sm text-gray-600">
                  {post.description.slice(0, 100)}...
                </p>
              </div>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
