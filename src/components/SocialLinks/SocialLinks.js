import React from 'react';
import './SocialLinks.scss';


export default function SocialLinks() {
    return (
        <div className="menu-social-links col-xl-2 col-lg-2 ">
            <a href='https://www.facebook.com/' >
                <div className="social-link"><i className="fab fa-facebook-square"></i></div>
            </a>
            <a href='https://www.twitter.com/' >
                <div className="social-link"><i className="fab fa-twitter"></i></div>
            </a>
            <a href='https://www.instagram.com/' >
                <div className="social-link"><i className="fab fa-instagram"></i></div>
            </a>
        </div>
    );
}

