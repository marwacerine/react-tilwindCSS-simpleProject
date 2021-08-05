import React from 'react';
import art1 from '../images/art1.jpg';
import art2 from '../images/art2.jpg';


function Content() {
    return (
        <>
        <div className="menu-card">
            <img src={art1} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className="menu-content">
                <h2 className="text-2xl mb-2"> BOB</h2>
                <p className="mb-2">Qualitaadd</p>
                <span>900 DA</span>
            </div>
            
        </div>
        <div className="menu-card">
            <img src={art2} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className="menu-content">
                <h2 className="text-2xl mb-2">Casquette</h2>
                <p className="mb-2">excellent</p>
                <span>700 DA</span>
            </div>
            
        </div>
</>
    )
}

export default Content;
