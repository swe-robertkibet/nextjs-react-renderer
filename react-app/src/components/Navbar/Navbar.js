import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a onClick={() => scrollToSection('home')}>Home</a>
                    <a onClick={() => scrollToSection('about')}>About</a>
                    <a onClick={() => scrollToSection('features')}>Features</a>
                    <a onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    {isOpen ? (
                        <svg className="navbar-close" viewBox="0 0 24 24">
                            <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
                        </svg>
                    ) : (
                        <svg className="navbar-menu" viewBox="0 0 24 24">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;