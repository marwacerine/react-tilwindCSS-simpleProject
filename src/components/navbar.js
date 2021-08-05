import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({ toggle }) {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
            <Link to='/' className=" pl-8">LOGO</Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
        <div className="pr-8 md:block hidden">
            <Link className="p-4" to='/'>Home</Link>
            <Link className="p-4" to='/menu'>Shop</Link>
            <Link className="p-4" to='/about'>about</Link>
            <Link className="p-4" to='/contact'>contact</Link>
        </div>
        </nav>
    );
}

export default Navbar;
