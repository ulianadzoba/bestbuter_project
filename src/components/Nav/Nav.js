import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-scroll';
import './Nav.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            mobile: !this.state.mobile
        });
    }
    render() {
        let { mobile } = this.state;
        return (
            <>
                <BrowserRouter>
                    <nav className="nav col-xl-7 col-lg-7">
                        <i
                            className="fa fa-bars burger-button"
                            aria-hidden="true"
                            onClick={e => this.handleToggle(e)}
                        />
                        <ul className={`collapsed ${mobile ? "mobile" : ""}`}>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={1000}
                                onClick={e => this.handleToggle(e)}>
                                <li>home</li>
                            </Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-90} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>about</li>
                            </Link>
                            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-89} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>services</li>
                            </Link>
                            <Link activeClass="active" to="history" spy={true} smooth={true} offset={-89} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>history</li>
                            </Link>
                            <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-87} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>gallery</li>
                            </Link>
                            <Link activeClass="active" to="price" spy={true} smooth={true} offset={-86} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>price</li>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-85} duration={1000} onClick={e => this.handleToggle(e)}>
                                <li>contact</li>
                            </Link>
                        </ul>
                    </nav>
                </BrowserRouter>
            </>
        );
    }
}

export default Nav;