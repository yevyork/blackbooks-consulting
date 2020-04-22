import React from 'react';
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import bblogo from '../assets/bblogo.png'
import './styles/Header.css'

function Header() {
    return(
    <div className='header-main-container'>
        <div className='left-header'>
        <img src={bblogo} className='mainlogo'alt='bb'/>
        <NavLink className='home-link' to='/'>BlackBooks Consulting</NavLink>
        </div>
        <Nav />

    </div>
    )
}

export default Header