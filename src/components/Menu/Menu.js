import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Menu.scss';
import Nav from '../Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';

class Menu extends Component {
    state = {}
    render() {
        return (
            <section className="menu">
                <div className="container">
                    <div className="row justify-content-between menu-row">
                        <Logo />
                        <Nav />
                        <SocialLinks />
                    </div>

                </div>
            </section>
        );
    }
}

export default Menu;