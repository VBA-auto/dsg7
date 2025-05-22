"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import CustomTextEditor from "./CustomTextEditor";
import DotLottieLoader from "../../Loader/DotLottieLoader";

const AddForumPostForm = () => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const handleGenerateAI = async () => {
    const { title } = getValues();

    if (!title) return toast.error("Please enter the forum title first.");

    setLoading(true);

    try {
      const res = await fetch("/api/OpenRouter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI response failed");

      setValue("name", data.name || "");
      setDescription(data.description || "");
      setComments(data.comments || []);

      toast.success("AI generated full content!");
    } catch (err) {
      console.error("AI error:", err);
      toast.error("Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const body = {
        ...formData,
        description,
        createdAt: new Date().toISOString(),
        visibility: true,
        comments,
        likes: 0,
        views: 170,
      };

      const res = await fetch("/api/addForum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) return toast.error(result.error || "Failed to add post");

      toast.success("Forum post added!");
      reset();
      setDescription("");
      setComments([]);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto px-5 py-8 relative">
      {loading && <DotLottieLoader overlayColor="rgba(0,0,0,0.7)" />}
      <h1 className="text-center mb-5 text-lg text-black">Add Forum Post</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black">
            Post Title
          </label>
          <input
            {...register("title", { required: true })}
            placeholder="Post title"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div className="text-center mx-auto">
          <button
            type="button"
            onClick={handleGenerateAI}
            className="flex items-center justify-center gap-2  hover:bg-gray-200 text-black px-5 py-2 rounded mt-2"
          >
            <img
              src="/images/AI.gif"
              alt="AI Icon"
              className="w-12 object-cover"
            />
            Generate with AI
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            User Name
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="AI generated user name"
            className="w-full p-2 border border-gray-300 rounded-md text-black"
          />
        </div>

        <div>
          <label className="block text-sm text-black mb-1">Description</label>
          <CustomTextEditor value={description} onChange={setDescription} />
        </div>

        {/* Editable AI Comments */}
        {comments.length > 0 && (
          <div>
            <label className="block mb-1 font-medium text-black">
              AI Generated Comments (editable)
            </label>

            {comments.map((comment, index) => (
              <div
                key={index}
                className="mb-3 border border-gray-200 p-3 rounded-lg bg-gray-50"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Comment #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...comments];
                      updated.splice(index, 1);
                      setComments(updated);
                    }}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Author"
                  className="w-full border px-3 py-1 mb-1 rounded"
                  value={comment.author}
                  onChange={(e) => {
                    const updated = [...comments];
                    updated[index].author = e.target.value;
                    setComments(updated);
                  }}
                />
                <label className="text-sm">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border px-3 py-1 mb-1 rounded"
                  value={comment.email}
                  onChange={(e) => {
                    const updated = [...comments];
                    updated[index].email = e.target.value;
                    setComments(updated);
                  }}
                />
                <label className="text-sm">Comment</label>
                <textarea
                  placeholder="Comment"
                  className="w-full border px-3 py-2 rounded"
                  value={comment.text}
                  onChange={(e) => {
                    const updated = [...comments];
                    updated[index].text = e.target.value;
                    setComments(updated);
                  }}
                />
              </div>
            ))}

            <div className="text-right">
              <button
                type="button"
                onClick={() =>
                  setComments([
                    ...comments,
                    {
                      author: "",
                      email: "",
                      text: "",
                      timestamp: new Date().toISOString(),
                      likes: 0,
                    },
                  ])
                }
                className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
              >
                ➕ Add Comment
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-5">
          <button
            type="submit"
            className="bg-red-500 hover:bg-green-700 text-white px-16 py-2 rounded-md"
          >
            {loading ? "Posting..." : "Post Forum"}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default AddForumPostForm;
