"use client";

import React, { useState, useEffect } from "react";
import Drawer from "../Components/Dashboard/Drawer";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initialCheckComplete, setInitialCheckComplete] = useState(false);

  // Check existing session on load
  useEffect(() => {
    const checkSession = async () => {
      const sessionToken = localStorage.getItem("sessionToken");
      const expiry = localStorage.getItem("sessionExpiry");

      if (!sessionToken || !expiry || Date.now() > Number(expiry)) {
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("sessionExpiry");
        setInitialCheckComplete(true);
        return;
      }

      try {
        const response = await fetch(`/api/Login?token=${sessionToken}`);
        const data = await response.json();

        if (data.valid) {
          setIsLoggedIn(true);
          // Update expiry if server returned a new one
          if (data.expiresAt) {
            localStorage.setItem("sessionExpiry", data.expiresAt);
          }
        } else {
          localStorage.removeItem("sessionToken");
          localStorage.removeItem("sessionExpiry");
        }
      } catch (error) {
        console.error("Session check failed:", error);
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("sessionExpiry");
      } finally {
        setInitialCheckComplete(true);
      }
    };

    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("sessionToken", data.sessionToken);
        localStorage.setItem("sessionExpiry", data.expiresAt);
        setIsLoggedIn(true);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  if (!initialCheckComplete) {
    return (
      <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Checking session...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full min-h-screen">
        {isLoggedIn ? (
          <div className="">
            <Drawer />
          </div>
        ) : (
          <div className="flex justify-center items-center h-[80vh] max-w-xl mx-auto">
            <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Dashboard
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="Log In"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={loading}
                  >
                    {loading ? <span>Loading...</span> : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
