import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/AboutPage", text: "About Us" },
    { href: "/Contact", text: "Contact" },
  ];

  const projects = [
    {
      id: 1,
      title: "Electronic Control and Automation",
      href: "/projects/project1",
    },
    { id: 2, title: "Industrial Electrical", href: "/projects/project2" },
    { id: 3, title: "Mechanical and Fabrication", href: "/projects/project3" },
    { id: 4, title: "Industrial Plant", href: "/projects/project4" },
    { id: 5, title: "Industrial Power", href: "/projects/project5" },
    { id: 6, title: "Industrial Panel Building", href: "/projects/project6" },
  ];

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between sticky px-4 md:px-12 z-30 py-3 border border-gray-200">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex justify-between items-center">
          <img
            src="https://basicworks.com.ng/wp-content/uploads/2019/12/Captjg.jpg"
            alt="logo"
            className="w-full h-10 lg:h-16"
          />
        </Link>
      </div>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
          onClick={toggleMenu}
        />
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <Link key={index} to={link.href}>
                <p
                  className={`text-white text-sm font-bold ${
                    location.pathname === link.href ? "bg-blue-500" : ""
                  }`}
                >
                  {link.text}
                </p>
              </Link>
            ))}
            <div className="relative">
              <p
                className="text-white text-sm font-bold cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </p>
              <div className="absolute top-full left-0 bg-white shadow-md py-2 rounded-md">
                {projects.map((project) => (
                  <Link key={project.id} to={project.href} onClick={closeMenu}>
                    <p className="text-gray-900 text-md font-semibold px-4 py-2 hover:bg-gray-200">
                      {project.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center gap-5">
        {links.map((link, index) => (
          <Link key={index} to={link.href}>
            <p
              className={`text-gray-900 text-md font-bold ${
                location.pathname === link.href
                  ? "bg-blue-500 p-4 text-white"
                  : ""
              }`}
            >
              {link.text}
            </p>
          </Link>
        ))}
        <div className="relative">
          <p
            className="text-gray-900 text-md font-bold cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </p>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 bg-white shadow-md py-2 rounded-md`}
          >
            {projects.map((project) => (
              <Link key={project.id} to={project.href} onClick={closeMenu}>
                <p className="text-gray-900 text-md font-semibold px-4 py-2 hover:bg-gray-200">
                  {project.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
