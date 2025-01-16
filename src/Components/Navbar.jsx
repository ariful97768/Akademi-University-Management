import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <NavLink className={'px-6 py-1 rounded-xl'} to={'/'}>Home</NavLink>
        <NavLink className={'px-6 py-1 rounded-xl'} to={'/all-scholarships'}>All Scholarship</NavLink>
        <NavLink className={'px-6 py-1 rounded-xl'} to={'/dashboard'}>Dashboard</NavLink>
    </>
    return (
        <div className='z-50 border-b-2 w-full top-0 sticky'>
            <div className={`py-2 mx-auto navbar px-10 bg-base-100`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
                            {links}
                        </ul>
                    </div>
                  <div><Link to={'/'} className='flex items-center gap-2'><img width={'40px'} src='/logo.png' alt="logo" /> </Link></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end relative">
                    <a href='/login' className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;