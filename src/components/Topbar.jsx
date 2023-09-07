import React from 'react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const handleLogout = () => {
    // Remove the access_token from local storage
    localStorage.removeItem('access_token');

    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link to="/" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Home
        </Link>
        <Link to="/statistics" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
          Estatisticas
        </Link>
        <span
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </span>
      </div>
    </nav>
  );
}