import { useState } from "react";
import Logo from "/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent z-50 relative">
      <div className="container mx-auto flex flex-rowitems-center justify-between p-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
  <img src={Logo} className="w-12 h-15" alt="Logo" />
  <span className="text-white -ml-4 text-2xl ">ankeerthan </span>
</a>



        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={toggleNavbar}
        >
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
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-8  lg:static fixed left-0 top-0 w-2/3 h-full lg:w-auto lg:bg-transparent bg-bg_color_2 text-white p-8 lg:p-0 lg:pr-8 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <li className="lg:hidden mb-4">
            <button
              className="absolute top-4 right-4 p-2 text-white"
              onClick={toggleNavbar}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li>
            <a
              className="block text-sm mt-2 text-white transition-colors duration-300 hover:text-pink"
              href="/#skills"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="block text-sm mt-2 text-white transition-colors duration-300 hover:text-pink"
              href="/#about"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              className="block text-sm mt-2 text-white transition-colors duration-300 hover:text-pink"
              href="/#experience"
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              className="block text-sm mt-2 text-white transition-colors duration-300 hover:text-pink"
              href="/#projects"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="block text-sm mt-2 text-white transition-colors duration-300 hover:text-pink"
              href="/#education"
            >
              EDUCATION
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
