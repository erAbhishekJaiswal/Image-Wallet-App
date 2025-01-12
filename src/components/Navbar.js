import React from 'react';
import './../CSSFolder/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className='logo'>Image Wallet</div>
                <ul className="navlinks">
                    {/* <li className="link"><Link to={'/'}>Home</Link></li> */}
                    <li className="link"><Link to={'/'}>Images</Link></li>
                    <button className="uploadbtn"><Link to={'/image/add'}>Upload</Link></button>
                </ul>
            </div>
        </>
    )
}

export default Navbar
