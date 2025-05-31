"use client";
import React, { useEffect, useState } from "react";
import {
  FaRegUserCircle,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaCommentDots,
} from "react-icons/fa";

export default function Comments({ initialComments = [], postId }) {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tempComment, setTempComment] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const handlePostClick = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setTempComment(newComment);
    setShowModal(true); // Open modal
  };

  const handleSubmitComment = async () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userInfo.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!userInfo.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const res = await fetch("/api/addComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        author: userInfo.name,
        email: userInfo.email,
        text: tempComment,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      setComments([result.comment, ...comments]);
      setNewComment("");
      setUserInfo({ name: "", email: "" });
      setShowModal(false);
    } else {
      alert(result.error || "Something went wrong.");
    }
  };

  useEffect(() => {
    setComments(initialComments || []);
  }, [initialComments]);

  return (
    <div className="bg-white md:w-full">
      <h2 className="text-2xl font-semibold text-gray-800">
        Conversation ({comments.length})
      </h2>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Start the discussion here. Be respectful.
      </p>

      <form onSubmit={handlePostClick} className="flex items-center gap-1 mb-8">
        <FaRegUserCircle
          size={36}
          className="text-gray-400 border-2 border-blue-500 rounded-full"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-grow p-2 border bg-white border-gray-300 rounded-md text-sm resize-none"
          rows="1"
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm self-start"
        >
          Envoyer
        </button>
      </form>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Enter your info</h3>
            <input
              type="text"
              placeholder="Your name"
              required
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitComment}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {comments.map((comment, i) => (
          <div key={i} className="flex items-start space-x-3">
            <FaRegUserCircle size={36} className="text-gray-400 rounded-full" />
            <div className="flex-grow w-full">
              <div className="flex items-center space-x-2 mb-0.5">
                <span className="font-semibold text-sm text-gray-800">
                  {comment.author}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(comment.timestamp).toLocaleDateString("en-GB")}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed break-words break-all whitespace-pre-wrap overflow-hidden">
                {comment.text}
              </p>

              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <button className="hover:text-blue-500 flex items-center">
                  <FaCommentDots className="mr-1" /> Reply
                </button>
                <button className="hover:text-blue-500 flex items-center">
                  <FaShare className="mr-1" /> Share
                </button>
                <button className="hover:text-blue-500 flex items-center">
                  <FaThumbsUp className="mr-1" /> {comment.likes || 0}
                </button>
                <button className="hover:text-red-500 flex items-center">
                  <FaThumbsDown className="mr-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
