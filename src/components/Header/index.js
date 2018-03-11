import React, { Component } from 'react';
import './header.scss';
import logo from './../../../dist/Images/MM.jpg' 

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className="container">
                    <div className="notification">
                        <div className="logo"><img src={logo}/> </div>
                        <div className="title">This is the title of the site.</div>      
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;