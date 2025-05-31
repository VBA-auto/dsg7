// app/Components/ClientModal.js
"use client";
import { useEffect, useState } from "react";
import Comments from "./Comments";

export default function ClientModal() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      setSelectedPost(e.detail);
      document.getElementById("ForumModal").showModal();

      // Increment view
      fetch("/api/incrementView", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: e.detail._id }),
      });
    };

    window.addEventListener("openModal", handler);
    return () => window.removeEventListener("openModal", handler);
  }, []);

  return (
    <dialog id="ForumModal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl bg-white">
        {selectedPost && (
          <>
            <h3 className="text-2xl font-bold text-red-500 mb-2">
              {selectedPost.title}
            </h3>
            <p className="text-black text-lg mb-2">
              {selectedPost.description}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Posted by:{" "}
              <span className="font-semibold">{selectedPost.name}</span>
            </p>
            <p className="text-sm text-gray-400">
              Date:{" "}
              {new Date(selectedPost.createdAt).toLocaleDateString("en-GB")}
            </p>
            <div className="mt-8">
              <Comments
                initialComments={selectedPost.comments}
                postId={selectedPost._id}
              />
            </div>
          </>
        )}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
