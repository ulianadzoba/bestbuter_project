import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

class SlideContent extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">

                        <div className="holder top-curly-line">
                            <div className="smallLine smallLine1"></div>
                            <div className="smallLine smallLine2"></div>
                        </div>
                        <div className="header-title">WE ARE BEST BUTER</div>
                        <div className="holder bottom-curly-line">
                            <div className="smallLine smallLine1"></div>
                            <div className="smallLine smallLine2"></div>
                        </div>
                        <div>
                            <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>
                                <ScrollAnimation animateIn="zoomIn" initiallyVisible={true}>
                                    <button className="header-button">Get started

                                    <div className="arrow-circle"></div>
                                        <ScrollAnimation animateIn="zoomIn" initiallyVisible={true}>
                                            <div className="arrow-line"></div>
                                            <div className="arrow-arrow">
                                                <i className="fas fa-caret-down"></i>
                                            </div></ScrollAnimation>
                                    </button>
                                </ScrollAnimation>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideContent;