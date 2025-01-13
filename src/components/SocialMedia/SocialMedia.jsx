import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const SocialMedia = () => {
    return (

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

    )
}

export default SocialMedia