import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="flex items-center pl-10 py-6">
      <h2 className="text-gray-300 text-3xl font-bold mr-auto">Port<span className='lo'>Folo</span></h2>
      <ul className="flex space-x-10 justify-center flex-1">
        <li><a href="/" className="text-black font-semibold hover:text-gray-500 text-xl">Home</a></li>
        <li><a href="/project" className="text-black font-semibold hover:text-gray-500 text-xl">Project</a></li>
        <li><a href="/gallery" className="text-black font-semibold hover:text-gray-500 text-xl">Gallary</a></li>
        <li><a href="/about" className="text-black font-semibold hover:text-gray-500 text-xl">About</a></li>
        <li><a href="/contact" className="text-black font-semibold hover:text-gray-500 text-xl">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
