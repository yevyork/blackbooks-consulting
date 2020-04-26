import React from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import bblogo from '../assets/bblogo.png'
import './styles/Header.css'

function Header() {
    return(
    <div className='header-main-container'>
        <div className='left-header'>
        
        <NavLink className='home-link' to='/'>
        <img src={bblogo} className='mainlogo'alt='bb'/>
        </NavLink>
        </div>
        <Nav />

    </div>
    )
}

export default Header