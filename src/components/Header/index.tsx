import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-black-600">Pedro Catelan</div>

        {/* Botão Hamburguer */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-1 w-6 bg-gray-700 my-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-gray-700 my-1 transition-all ${
              menuOpen ? "rotate-55 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-gray-700 my-1 transition-all ${
              menuOpen ? "-rotate-55 -translate-y-1" : ""
            }`}
          ></span>
        </button>

        {/* Links */}
        <ul
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-gray-100 md:bg-transparent left-0 w-full md:w-auto px-4 md:px-0 py-4 md:py-0 top-16 transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
