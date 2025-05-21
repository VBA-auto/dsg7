"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import CustomTextEditor from "./CustomTextEditor";
import DotLottieLoader from "../../Loader/DotLottieLoader";

const AddForumPostForm = () => {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

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

      toast.success("AI generated content!");
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
        comments: [],
        likes: 0,
        views: 0,
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
