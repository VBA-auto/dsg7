"use client";

import { useEffect, useState } from "react";
import { sanitizeDescription } from "./sanitize";

export default function ForumDelete() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all forum posts
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

  // Delete forum post
  const handleDeletePost = async (id) => {
    const confirm = window.confirm("Delete this forum post?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/deleteForums?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPosts(posts.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete post");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  // Delete comment
  const handleDeleteComment = async (postId, index) => {
    const confirm = window.confirm("Delete this comment?");
    if (!confirm) return;

    try {
      const res = await fetch(
        `/api/deleteComment?postId=${postId}&commentIndex=${index}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        const updatedPosts = posts.map((post) => {
          if (post._id === postId) {
            const updatedComments = [...(post.comments || [])];
            updatedComments.splice(index, 1);
            return { ...post, comments: updatedComments };
          }
          return post;
        });
        setPosts(updatedPosts);
      } else {
        alert("Failed to delete comment");
      }
    } catch (err) {
      console.error("Comment delete error:", err);
    }
  };

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Forum Discussions</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post._id}
              className="border rounded-xl p-4 shadow-md space-y-2"
            >
              <div className="flex justify-between items-start gap-5">
                <div className="w-[90%]">
                  <h2 className="font-bold">{post.name}</h2>
                  <p
                    className="text-sm text-black"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeDescription(post.description),
                    }}
                  />
                </div>
                <div className="w-[10%]">
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete Post
                  </button>
                </div>
              </div>

              {/* Show comments */}
              {post?.comments && post?.comments.length > 0 && (
                <div className="mt-4 pl-4 border-l-2 border-gray-100 space-y-2">
                  <h3 className="font-medium">Comments:</h3>
                  {post.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-2 rounded flex justify-between items-center"
                    >
                      <div className="">
                        <p className="text-sm font-semibold">
                          {comment.author}
                        </p>
                        <p className="text-sm font-semibold">{comment.email}</p>
                        <p className="text-xs text-black">{comment?.text}</p>
                      </div>
                      <div className="">
                        <button
                          onClick={() => handleDeleteComment(post._id, index)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
