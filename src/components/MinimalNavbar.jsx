// src/components/MinimalNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MinimalNavbar = () => (
  <nav className="w-full bg-blue-950 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 py-4 shadow-sm">
    <div className="container mx-auto px-4">
      <Link to="/" className="text-2xl font-bold hover:text-indigo-800  text-white dark:text-white hover:scale-105">
        EduSync
      </Link>
    </div>
  </nav>
);

export default MinimalNavbar;
