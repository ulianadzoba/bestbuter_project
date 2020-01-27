import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className="logo col-xl-3 col-lg-3 col-8">
                <span className="logo-icon">
                    <i className="fas fa-hamburger"></i>
                </span>
                <span className="logo-text">
                    Best Buter
                </span>
            </div>
        );
    }
}

export default Logo;