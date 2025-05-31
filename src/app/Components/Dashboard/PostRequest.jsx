"use client";
import { useEffect, useState } from "react";

export default function UserPostsAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getPendingPosts")
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

  // ✅ Approve handler
  const handleApprove = async (id) => {
    try {
      const res = await fetch("/api/approvePost", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p._id !== id));
      } else {
        alert("Failed to approve");
      }
    } catch (err) {
      console.error("Approval error:", err);
      alert("Approval failed");
    }
  };

  // ❌ Delete handler (re-use your delete API)
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

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

  if (loading) return <p>Loading pending posts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Posts Awaiting Approval</h1>
      {posts.length === 0 ? (
        <p>All posts are approved ✅</p>
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
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(post._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
