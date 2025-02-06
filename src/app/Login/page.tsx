"use client";
import React, { useState } from "react";
import AuthForm from '../components/AuthForm';
import ToggleButton from '../components/ToggleButton';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex space-x-4 mb-6">
          <ToggleButton isLogin={true} onClick={() => setIsLogin(true)} />
          <ToggleButton isLogin={false} onClick={() => setIsLogin(false)} />
        </div>
        <AuthForm isLogin={isLogin} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;