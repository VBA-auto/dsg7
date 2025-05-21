"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import AddProductForm from "./AddForum/AddProduct";
import ForumDelete from "./ForumDelete";
import UserPostsAdmin from "./PostRequest";

const Drawer = () => {
  const [activeView, setActiveView] = useState("add");
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, drawer should be open by default
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (view) => {
    setActiveView(view);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-white ">
      {/* Toggle Button - Fixed position */}
      <button
        onClick={toggleDrawer}
        className={`fixed z-50 p-2 m-2 rounded-md bg-white text-black ${
          isOpen ? "md:left-64" : "left-2"
        } transition-all duration-300`}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Drawer/Sidebar */}
      <div
        className={`bg-white text-black h-full fixed md:relative z-40
          transition-all duration-100 ease-in-out
          ${isOpen ? "w-64" : "w-0 overflow-hidden"}
        `}
      >
        <div className="h-full p-4 pt-16">
          <ul
            className="space-y-2"
            style={{ listStyle: "none", paddingLeft: "0" }}
          >
            <li>
              <button
                onClick={() => handleNavItemClick("add")}
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  activeView === "add" ? "bg-gray-100" : ""
                }`}
              >
                Add Posts
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavItemClick("req")}
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  activeView === "req" ? "bg-gray-100" : ""
                }`}
              >
                Posts Request
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavItemClick("delete")}
                className={`w-full text-left p-2 rounded hover:bg-gray-200 ${
                  activeView === "delete" ? "bg-gray-100" : ""
                }`}
              >
                Delete Post
              </button>
            </li>
            <li>
              <Link
                href="/"
                className="block p-2 rounded hover:bg-gray-200"
                onClick={() => isMobile && setIsOpen(false)}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 overflow-auto transition-all duration-300 ${
          isOpen ? "ml-0 md:ml-5" : "ml-0"
        }`}
      >
        <div className="p-4">
          {activeView === "add" && <AddProductForm />}
          {activeView === "req" && <UserPostsAdmin />}
          {activeView === "delete" && <ForumDelete />}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
