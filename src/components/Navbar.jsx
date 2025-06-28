// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const name = localStorage.getItem('name');
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-950 dark:bg-slate-800 text-slate-900 dark:text-white shadow px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-white dark:text-indigo-300 hover:text-indigo-800">
        <Link to="/dashboard">EduSync</Link>
      </div>
      <div className="space-x-4 flex items-center">
        {role === 'Instructor' && (
          <>
            <Link to="/dashboard" className=" text-white hover:underline hover:text-blue-600">Dashboard</Link>
            <Link to="/courses" className=" text-white hover:underline hover:text-blue-600">Courses</Link>
            <Link to="/assessments" className="text-white hover:underline hover:text-blue-600">Assessments</Link>
            <Link to="/results" className=" text-white hover:underline hover:text-blue-600">Results</Link>
            <Link to="/students" className="text-white hover:underline hover:text-blue-600">Students</Link>
          </>
        )}
        {role === 'Student' && (
          <>
            <Link to="/dashboard" className="text-white hover:underline hover:text-blue-600">Dashboard</Link>
            <Link to="/student/courses" className="text-white hover:underline hover:text-blue-600">Courses</Link>
            <Link to="/student/results" className="text-white hover:underline hover:text-blue-600">My Results</Link>
          </>
        )}
        <Link to="/profile" className="text-white hover:underline hover:text-blue-600">Profile</Link>
        {name && (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 active:scale-90 hover:scale-105 text-white px-3 py-1 rounded shadow hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
