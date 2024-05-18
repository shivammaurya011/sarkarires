// components/Header.jsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-blue-600 flex justify-between items-center px-6 sm:px-4 py-4 shadow-md">
        <div className="border-2 border-white rounded-full flex justify-center items-center p-2">
          <h1 className="text-white font-bold">S R</h1>
        </div>
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold">SARKARI RES</h1>
          <a href="#" className="text-white text-sm">www.sarkarires.com</a>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition duration-300">Login</button>
        </div>
      </header>

      <nav className={`bg-white py-2 shadow-md ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className={`flex justify-center ${isMenuOpen && "flex-col"} md:gap-8 items-center gap-4`}>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/jobs">Jobs</NavItem>
          <NavItem href="/results">Results</NavItem>
          <NavItem href="/admissions">Admissions</NavItem>
          <NavItem href="/admitcards">Admit Cards</NavItem>
          <NavItem href="/syllabus">Syllabus</NavItem>
          <NavItem href="/answerkeys">Answer Keys</NavItem>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-blue-600 hover:text-blue-800 transition duration-300">
        {children}
      </Link>
    </li>
  );
}

export default Header;
