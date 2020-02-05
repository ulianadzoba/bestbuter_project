import React from 'react';
import Logo from '../Logo/Logo';
import './Menu.scss';
import Nav from '../Nav/Nav';
import SocialLinks from '../SocialLinks/SocialLinks';

export default function Menu() {
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
