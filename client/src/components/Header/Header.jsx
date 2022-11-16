import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {

    const [userType, setUserType] = useState("");
    //user.type (User model) will determine the state here and render conditionally based on that. 
    
    return (
        <header>
            <nav>
                <ul> 
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/client'>Dashboard</Link></li> 
                    {/* will fix Dashboard link to conditionally render based on userType state once Models and login are created */}
                </ul>
                <button>
                    Sign in
                </button>
            </nav>
        </header>
    )
}

export default Header;