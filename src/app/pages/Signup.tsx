"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!isLogin) {
      // Sign-up process
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          setError(errorData?.error || "Signup failed!");
          return;
        }

        // Auto-login after signup
        const loginRes = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: true,
          callbackUrl: "/dashboard",
        });

        if (!loginRes?.ok) {
          setError("Signup successful, but login failed.");
        } else {
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (err) {
        setError("An error occurred during signup.");
        console.error("Signup error:", err);
      }
    } else {
      // Login process
      try {
        const loginRes = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: true,
          callbackUrl: "/dashboard",
        });

        if (!loginRes?.ok) {
          setError("Invalid email or password.");
        } else {
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (err) {
        setError("An error occurred during login.");
        console.error("Login error:", err);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 px-4 rounded-md ${isLogin ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 px-4 rounded-md ${!isLogin ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            Sign Up
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="myEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
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
              id="myPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmmyPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
