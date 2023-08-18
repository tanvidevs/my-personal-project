import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=' sticky top-0 bg-white'>
      <header className="text-gray-600 body-font shadow-md" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span
              className="text-5xl md:text-6xl text-pink-600"
              style={{ fontFamily: 'Pacifico, cursive', fontWeight: 'bold' }}
              
            >
              Tanvi
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
   {/* ... navigation links ... */}

            {/* Navigation Links */}
            <Link to="Home" smooth={true} duration={500} className="mr-5 hover:text-pink-600 font-bold">
              Home
            </Link>
            <Link to="Skill" smooth={true} duration={500} className="mr-5 hover:text-pink-600 font-bold">
              Skill
            </Link>
            <Link
              to="Academics"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-pink-600 font-bold"
            >
              Academics
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-pink-600 font-bold"
            >
              Projects
            </Link>
            <Link
              to="Intranship"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-pink-600 font-bold"
            >
               Internship
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="mr-5 hover:text-pink-600 font-bold"
            >
              Contact
            </Link>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
              {nav}
            </div>

            {/* Mobile menu */}
            <ul
              className={
                !nav
                  ? 'hidden'
                  : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
              }
            >
              {/* Mobile Menu Items */}
              <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              
              {/* ... other mobile menu items ... */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
