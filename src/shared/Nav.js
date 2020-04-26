import React from 'react'
import Sidebar from 'react-sidebar'
import { NavLink } from 'react-router-dom'
import menu from '../assets/menu.png'
import './styles/Nav.css'


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sidebarOpen: false
        };
        }
        onSetSidebarOpen(open) {
            this.setState({
                sidebarOpen: open
            })
            
        }

        closeSidebar() {
            this.onSetSidebarOpen(false)
        }
    
    render() { 
        
        return (
            <Sidebar
                open={this.state.sidebarOpen}
                onSetOpen={this.onsetSidebarOpen}
                pullRight= {true}
                styles={ {sidebar: {background: "rgba(0, 0, 0, 0.9)",
                                    width:'50%',
                                    position: 'absolute'
                                    
                                }}}
                sidebar={
                    <div className='nav-main-container'>
                        
                        <NavLink to='/services' className='nav' activeClassName='activenav' onClick={() => this.closeSidebar()}>Services</NavLink>
                        <NavLink to='/contact' className='nav' activeClassName='activenav'onClick={()=> this.closeSidebar()}>Contact</NavLink>
                        <NavLink to='/community' className='nav' activeClassName='activenav'onClick={()=> this.closeSidebar()}>Community</NavLink>
                    
                        <div className='close-nav'>
                            <br></br>
                            <br></br>
                            <button className='close-menu' onClick={() => this.closeSidebar()}>Close</button>
                        </div>
                    </div>
                    }
                >
            <button className="btn" onClick={() => this.onSetSidebarOpen(true)} >
                <img className="menu" src={menu} alt="menu"/>
            </button>   
            </Sidebar>
        )
    }
}

export default Nav