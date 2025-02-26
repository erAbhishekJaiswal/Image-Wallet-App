import React from 'react';
import './../CSSFolder/navbar.css';
import { Link } from 'react-router-dom';
import { MdCloudUpload } from "react-icons/md";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className='logo'>Image Wallet</div>
                <ul className="navlinks">
                    {/* <li className="link"><Link to={'/'}>Home</Link></li> */}
                   <Link to={'/'}> <li className="link">Images</li></Link>
                    <button className="uploadbtn"><Link className='upload-btn' to={'/image/add'}> <MdCloudUpload className='upload-icon'/>Upload</Link></button>
                </ul>
            </div>
        </>
    )
}

export default Navbar
