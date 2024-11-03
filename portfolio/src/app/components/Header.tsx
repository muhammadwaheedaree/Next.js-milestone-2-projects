"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            MW.
          </Link>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
            {/* <a href="#" className="nav-link mobile-download-cv" onClick={toggleMenu}>
              Download CV
            </a> */}
          </nav>
          <div className="header-actions">
            <a href="#" className="download-cv-button desktop-only">
              Download CV
            </a>
            <button 
              className="menu-button" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}