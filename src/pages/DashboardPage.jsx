// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const name = localStorage.getItem('name');
  const role = localStorage.getItem('role');

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome, {name}!</h2>
      <p className="text-gray-600 text-xl dark:text-slate-300 mb-4">
        You are logged in as a <strong>{role}</strong>.
      </p>

      {role === 'Instructor' && (
        <div className="grid gap-10 md:grid-cols-2">
          <Link to="/courses" className="bg-white hover:scale-105 active:scale-95 text-center text-lg  p-4 rounded-2xl shadow-xl hover:bg-indigo-400 ">
            Manage Courses
          </Link>
          <Link to="/assessments" className="bg-white hover:scale-105 active:scale-95 dark:bg-orange-900 text-lg text-center p-4 rounded-2xl shadow-xl hover:bg-orange-200 dark:hover:bg-orange-800">
            Manage Assessments
          </Link>
          <Link to="/results" className="bg-white hover:scale-105 active:scale-95 dark:bg-rose-900 p-4 text-lg text-center rounded-2xl shadow-xl hover:bg-rose-200 dark:hover:bg-rose-800">
            View Results
          </Link>
          <Link to="/students" className="bg-white hover:scale-105 active:scale-95 dark:bg-cyan-900 p-4 text-lg text-center rounded-2xl shadow-xl hover:bg-cyan-200 dark:hover:bg-cyan-800">
            View Students
          </Link>
        </div>
      )}

      {role === 'Student' && (
        <div className="grid gap-10 md:grid-cols-2">
          <Link to="/student/courses" className="bg-white hover:scale-105 active:scale-95 dark:bg-blue-900 p-4 rounded-2xl shadow-xl hover:bg-blue-200 dark:hover:bg-blue-800 text-lg text-center">
            📚 Browse Courses
          </Link>
          <Link to="/student/results" className="bg-white hover:scale-105 active:scale-95 dark:bg-green-900 p-4 rounded-2xl shadow-xl hover:bg-green-200 dark:hover:bg-green-800 text-lg text-center">
            📊 View My Results
          </Link>
          <Link to="/profile" className="bg-white hover:scale-105 active:scale-95 dark:bg-purple-900 p-4 rounded-2xl shadow-xl hover:bg-purple-200 dark:hover:bg-purple-800 text-lg text-center">
            👤 Update Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
