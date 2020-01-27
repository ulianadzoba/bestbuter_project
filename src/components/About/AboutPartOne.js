import React, { Component } from 'react';
import './About.scss';
import about from '../../img/about.jpg';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import ZigZagLine from '../ZigZagLine/ZigZagLine';

class AboutPartOne extends Component {
    state = {}
    render() {
        return (
            <div className="about-part-one container">
                <div className="row ">
                    <div className="about-one-image col-xl-12">
                        <img src={about} alt="table" />
                    </div>
                </div>

                <div className="row justify-content-center text-center">

                    <div className="col-xl-3 col-lg-3 col-md-4 about-one-title section-title">
                        About Us
                        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                            <ZigZagLine />
                        </ScrollAnimation>
                    </div>

                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-10">
                        <div className="about-one-text section-main-text">
                            We are team of young enthusiasts and food lovers, who collaborate to create a hight quality product.
                            BEST BUTER is not only about food, it is about art.
                            We imagine the world where there is no such thing as a bad buter. Everything we do is for you. We are dedicated to the uncompromising quality of our food and services. Try it once and you will never regret.                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center custom-gutter no-gutters about-buttons">
                    <div className="left-pd col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-85} duration={2000}>
                            <button className="about-button">Contact us</button>
                        </Link>
                    </div>
                    <div className="right-pd col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6">
                        <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-88} duration={2000}>
                            <button className="about-button">Gallery</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPartOne;