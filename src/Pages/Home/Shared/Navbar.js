import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-secondary text-white">
            <div class="navbar-start">
                
                <Link to="/" class="btn btn-ghost normal-case text-xl">Friends-16</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/photos">Photos</Link></li>
                    <li tabindex="0">
                        <Link to="/">
                            Gang-16
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul class="p-2">
                            <li><Link to="/student">Student's Profile</Link></li>
                            <li><Link to="/teacher">Teacher's Profile</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/private">Private</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <Link to="/login" class="btn">Click Me</Link>
            </div>
        </div>
    );
};

export default Navbar;