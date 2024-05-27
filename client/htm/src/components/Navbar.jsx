import  { useState } from 'react';
import  "../index.css" 

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/"> <img src="https://htm-4-images.s3.amazonaws.com/img/HTMLOGHO__NEW-bg.webp" alt="Hack The Mountains" className=" w-28 h-12" /></a>
        </div>
        <div className="hidden md:flex  space-x-7">
          <Link to="/" className="text-lg text-white font-bold hover:text-[#4cb7e9] transition duration-300">
            Home
          </Link>
          <Link to="/event" className="text-lg text-white font-bold hover:text-[#4cb7e9] transition duration-300">
            Event
          </Link>
          <Link to="/register" className="text-lg text-white font-bold hover:text-[#4cb7e9] transition duration-300">
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Open Menu" className="text-white text-2xl">
            &#9776;
          </button>
        </div>
      </div>
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block p-2 text-white text-lg hover:text-[#4cb7e9] transition duration-300">
          Home
        </Link>
        <Link to="/event" className="block p-2 text-white text-lg hover:text-[#4cb7e9] transition duration-300">
          Event
        </Link>
        <Link to="/register" className="block p-2 text-white text-lg hover:text-[#4cb7e9] transition duration-300">
          Register/Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
