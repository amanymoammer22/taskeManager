import React from 'react'
import { useState } from "react";
export default function HandelLogin() {
     const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Task Manager</h1>
        <p className="text-gray-500 text-center mb-6">
          Organize your team's workflow
        </p>

        {/* Tabs */}
        <div className="flex justify-evenly mb-6 bg-gray-200 rounded-lg p-2">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 px-4 py-2 rounded-lg font-medium ${
              activeTab === "login"
                ? "bg-white border border-gray-200 text-blue-600 border-b-2"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`w-1/2 px-4 py-2 rounded-lg font-medium ${
              activeTab === "register"
                ? "bg-white border border-gray-200 text-blue-600 border-b-2"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg shadow"
            >
              Sign In
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === "register" && (
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 p-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              className="w-full p-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none"
            />

            <label
              htmlFor="regEmail"
              className="block text-sm font-medium text-gray-700 p-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="regEmail"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none"
            />

            <label
              htmlFor="regPassword"
              className="block text-sm font-medium text-gray-700 p-2"
            >
              Password
            </label>
            <input
              type="password"
              id="regPassword"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none"
            />

            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 p-2"
            >
              Role
            </label>
            <select
              id="role"
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none"
            >
              <option className="font-bold">Team Member</option>
              <option className="font-bold">Manager</option>
            </select>

            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
