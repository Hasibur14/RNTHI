import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='container mx-auto max-w-7xl flex py-2 z-50'>
            {/* Sidebar menu */}
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-14">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button w-20">
                        <IoMenuOutline className='text-4xl text-white' />
                    </label>
                </div>
                <div className="drawer-side mt">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-primary-light text-primary-soft text-xl font-mulish min-h-full w-80 p-4 pt-16">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/about">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                    <FaFacebookF className="text-2xl p-1 rounded bg-primary-light text-white hover:bg-white hover:text-pribg-primary-light transition duration-500" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                    <FaLinkedinIn className="text-2xl p-1 rounded bg-primary-light text-white hover:bg-white hover:text-pribg-primary-light transition duration-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                    <FaXTwitter className="text-2xl p-1 rounded bg-primary-light text-white hover:bg-white hover:text-pribg-primary-light transition duration-500" />
                </a>
                <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email us">
                    <IoLogoYoutube className="text-2xl p-1 rounded bg-primary-light text-white hover:bg-white hover:text-pribg-primary-light transition duration-500" />
                </a>

            </div>
        </div>
    )
}

export default Sidebar;