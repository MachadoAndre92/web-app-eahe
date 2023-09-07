import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Remove the access_token from local storage
    localStorage.removeItem('access_token');

    // Optionally, you can also redirect the user to a login page or perform other logout-related actions.
    // Example: window.location.href = '/login';
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;