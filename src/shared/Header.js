import React from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import bblogo from '../assets/bblogo.png'
import './styles/Header.css'

function Header() {
    return(
    <div className='header-main-container'>
        <div className='left-header'>
        <Nav />
        <NavLink className='home-link' to='/'>
        <img src={bblogo} className='mainlogo'alt='bb'/>
        </NavLink>
        </div>
        

    </div>
    )
}

export default Header