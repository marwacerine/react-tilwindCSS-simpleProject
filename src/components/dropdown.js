import React from 'react';
import {Link} from 'react-router-dom';


function Dropdown({isOpen,toggle}) {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-red-600' : 'hidden'}>
            <Link className="p-4" to='/'>Home</Link>
            <Link className="p-4" to='/menu'>Shop</Link>
            <Link className="p-4" to='/about'>about</Link>
            <Link className="p-4" to='/contact'>contact</Link> 
        </div>
    )
}

export default Dropdown;
