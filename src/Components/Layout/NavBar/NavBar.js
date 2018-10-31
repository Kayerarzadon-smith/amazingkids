import React from 'react';
import './NavBar.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';


const navbar = (props) => (
    <div className="navbar">
        <nav>
            <Link to="/"><Logo/></Link>
            <ul>
                <li><Link to="/curriculum">Curriculum</Link></li>
            </ul>
        </nav>
    </div>
);

export default navbar;