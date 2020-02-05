import React from 'react';
import Slider from "react-slick";
import SlideContent from './SlideContent';

import './Header.scss';

export default function Header() {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false
    };
    return (
        <section className="header" id="home">
            <Slider {...settings} className="header-slider">
                <div className="slide-one slide ">
                    <SlideContent />
                </div>
                <div className="slide-two slide">
                    <SlideContent />
                </div>
                <div className="slide-three slide">
                    <SlideContent />
                </div>
            </Slider>
        </section>
    );
}
