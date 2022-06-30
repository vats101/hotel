import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa';
import { useState, useContext} from 'react'
import RoomContext from '../context';
const Navbar = () => {
    const value=useContext(RoomContext);
    const [isOpen, setIsOpen] = useState("false");
    return (
        <div className='navbar'>
            <nav className='nav-center'>
                <nav className='nav-header'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </nav>
                <button className='nav-btn'>
                    <FaAlignRight className="nav-icon" onClick={()=>setIsOpen(!isOpen)}></FaAlignRight>
                </button>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>'
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar