import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCloudUpload } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import './../CSSFolder/navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="logo-link">Image Wallet</Link>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <RxCross1 /> : <FaBars />}
            </button>

            <ul className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
                <li><Link className="navlink" to="/" onClick={() => setIsMenuOpen(false)}>Images</Link></li>
                <li>
                    <Link className="upload-btn" to="/image/add" onClick={() => setIsMenuOpen(false)}>
                        <MdCloudUpload className="upload-icon" /> Upload
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

