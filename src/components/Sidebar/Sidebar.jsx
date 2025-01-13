import React from 'react'
import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import SocialMedia from '../SocialMedia/SocialMedia';

const Sidebar = () => {
    return (
        <div className='container mx-auto max-w-7xl flex z-50'>
            {/* Sidebar menu */}
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-14">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button w-20">
                        <IoMenuOutline className='text-4xl text-white hover:text-primary-light transition-colors duration-500' />
                    </label>
                </div>
                <div className="drawer-side mt">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-primary-light text-xl font-mulish min-h-full w-72 p-4 ">
                        <Link to="/">
                            <img
                                className='w-32 p-5 pb-5'
                                src={logo}
                                alt="rnthi" />
                        </Link>
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
                        <div className="mt-10">
                            <SocialMedia />
                        </div>
                    </ul>
                </div>
            </div>
            {/* Social Media */}
            <SocialMedia />
        </div>
    )
}

export default Sidebar;