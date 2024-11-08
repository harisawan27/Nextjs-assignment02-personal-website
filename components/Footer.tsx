import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-xl font-semibold">&copy; {new Date().getFullYear()} Haris. All rights reserved.</p>
      </div>
    </footer>
  );
}
