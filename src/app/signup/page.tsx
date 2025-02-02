"use client";

import { useState } from "react";
import Image from "next/image";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-blue-100 justify-center items-center">
        <Image
          src="/beat.png"
          alt="Shopping Illustration"
          className="w-full h-full"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between items-center">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
                Log In
              </button>
              <a href="#" className="text-red-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
