"use client";
import { TiEye } from "react-icons/ti";
import { useState } from "react";
import Comments from "./Comments";
import { sanitizeDescription } from "./sanitize";
import { MdCancel } from "react-icons/md";

export default function PostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newPost, setNewPost] = useState({
    name: "",
    email: "",
    description: "",
    title: "",
  });

  const handleOpenModal = async (post) => {
    await fetch("/api/incrementView", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: post._id }),
    });

    setSelectedPost(post);
    document.getElementById("ForumModal").showModal();
  };

  // Filter posts based on search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* 🔍 Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher un sujet..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="">
        <div className="mx-auto text-center ">
          <button
            className="text-[17px] text-red-500 border px-12 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
            onClick={() => document.getElementById("NewPostModal").showModal()}
          >
            Postez ici
          </button>
        </div>
      </div>

      {/* 📄 Post List */}
      {filteredPosts.length === 0 ? (
        <div className="min-h-72">
          <p>Aucun sujet trouvé.</p>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <div
            key={post._id}
            className="p-4 rounded-lg md:flex justify-between items-center gap-5 shadow hover:shadow-md transition"
          >
            <div className="w-3/4">
              <h2
                onClick={() => handleOpenModal(post)}
                className="text-lg text-red-400 font-semibold cursor-pointer hover:underline"
              >
                {post.title}
              </h2>
              {/* <p className="text-sm text-gray-700">
                {post.description?.slice(0, 120)}...
              </p> */}
              <p
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: sanitizeDescription(post.description).slice(0, 160),
                }}
              />
              <p className="text-xs text-gray-700 mt-1">
                Posté le {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="md:w-1/4 md:text-end">
              <div className="flex md:justify-end items-center gap-2">
                <p>{post.comments.length} réponse</p>
                <p className="flex items-center gap-1">
                  <TiEye className="mt-[-3px]" /> {post.views || 0} vues
                </p>
              </div>
              <p>par {post.name}</p>
            </div>
          </div>
        ))
      )}

      {/* 🗂 Modal */}
      <dialog id="ForumModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          {selectedPost && (
            <>
              <h3 className="text-2xl font-bold text-red-500 my-3">
                {selectedPost?.title}
              </h3>
              {/* <p className="text-black text-lg mb-2">
                {selectedPost.description}
              </p> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: selectedPost?.description,
                }}
              />

              <p className="text-sm text-gray-500 mb-1">
                Posté par:{" "}
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
              <button className="btn btn-sm bg-red-500 border-0 fixed top-0 right-0">
                <MdCancel className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="NewPostModal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl bg-white">
          <h3 className="text-xl font-semibold text-red-500 mb-4">
            Postez ici
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your name"
              className="input input-bordered w-full bg-gray-100"
              value={newPost.name}
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Your email"
              className="input input-bordered w-full bg-gray-100"
              value={newPost.email}
              onChange={(e) =>
                setNewPost({ ...newPost, email: e.target.value })
              }
            />
            <input
              type="text"
              required
              placeholder="Post title"
              className="input input-bordered w-full bg-gray-100"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
            <textarea
              className="textarea textarea-bordered w-full bg-gray-100"
              placeholder="Write your thoughts..."
              rows={5}
              required
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn ">Cancel</button>
            </form>
            <button
              className="btn bg-red-500 border-0"
              onClick={async () => {
                const res = await fetch("/api/userPost", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(newPost),
                });
                const data = await res.json();
                if (res.ok) {
                  alert(
                    "Thank you! Your post will be visible after admin approval."
                  );
                  setNewPost({
                    name: "",
                    email: "",
                    description: "",
                    title: "",
                  });
                  document.getElementById("NewPostModal").close();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
