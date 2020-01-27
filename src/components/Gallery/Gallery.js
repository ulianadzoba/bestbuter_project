import React, { Component } from 'react';
import GalleryContainer from './GalleryContainer';
import './Gallery.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import ZigZagLine from '../ZigZagLine/ZigZagLine';

class Gallery extends Component {
    render() {
        return (
            <section className="gallery" id="gallery">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 section-title">
                            Gallery
                            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                                <ZigZagLine />
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-10 section-main-text  text-center">
                            Our master chefs serve the most delicious variety of sandwiches using the freshest food from all over the world
                        </div>
                    </div>
                </div>
                <GalleryContainer />
            </section>
        );
    }
}

export default Gallery;