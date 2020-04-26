import React from 'react';
import Header from './shared/Header'
import Routes from './routes/index'
import './Container.css';
import Footer from './shared/Footer'

function Container() {
    return(
        <div className='main'>
            <Header />
            <Routes />
            <hr/>
            <Footer />
            <hr/>
        </div>
    )
}

export default Container