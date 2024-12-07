import { personalData } from "../../utils/data/personalInfo.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-bg_color_2 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-col items-center mb-8">
          <ul className="flex flex-row justify-center items-center ">
            <li>
              <a
                className="block px-4 py-2 no-underline outline-none text-sm text-white transition-colors duration-300 hover:text-pink"
                href="/#home"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 no-underline outline-none text-sm text-white transition-colors duration-300 hover:text-pink"
                href="/#about"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 no-underline outline-none text-sm text-white transition-colors duration-300 hover:text-pink"
                href="/#projects"
              >
                PROJECTS
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-row justify-center items-center mb-8 gap-4">
          <a
            href={personalData.github}
            className="transition-all text-gray-400 hover:scale-125 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href={personalData.linkedIn}
            className="transition-all text-gray-400 hover:scale-125 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="transition-all text-gray-400 hover:scale-125 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMail className="text-3xl" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bhoomi Patani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
