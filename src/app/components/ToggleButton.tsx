import React from 'react';

interface ToggleButtonProps {
  isLogin: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isLogin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 py-2 text-sm font-medium ${
        isLogin ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
      } rounded-md focus:outline-none`}
    >
      {isLogin ? 'Login' : 'Sign Up'}
    </button>
  );
};

export default ToggleButton;