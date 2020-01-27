import React, { Component } from 'react';
import './Services.scss';
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {

    render() {
        return (
            <section className="services" id="services">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-3 col-xl-2 col-lg-3 col-md-4 services-title section-title">
                            Services
                            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                                <div className="holder-white">
                                    <div className="smallLine smallLine1"></div>
                                    <div className="smallLine smallLine2"></div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-10 ">
                            <div className="services-description section-main-text text-center">
                                We are committed to providing the best customer service possible
                            </div>
                        </div>
                    </div>

                    <div className="row services-items">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 serv-it row-one">
                            <div className="line line-one"></div>
                            <div className="icon">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <div className="line line-two"></div>
                            <div className="item">
                                <div className="item-title">
                                    Cafe
                                </div>
                                <div className="item-text">
                                    You are always  welcome to have breakfast, lunch or dinner in our cafe, located in the heart of the city.
                                    You can find your favorite meals and try amazing drinks here.                                    <br />

                                    <div className="goal">Spend your time with us</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 serv-it row-one">
                            <div className="line line-one"></div>
                            <div className="icon">
                                <i className="fas fa-blender-phone"></i>
                            </div>
                            <div className="line line-two"></div>
                            <div className="item">
                                <div className="item-title">
                                    Ordering
                                </div>
                                <div className="item-text">
                                    We work 24 hours a day, 7 days a week, whenever you need just call and place an order.
                                    At BEST BUTER, our call center agent will be always ready to help you.
                                    <div className="goal">Call us when you need</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 serv-it item-three">
                            <div className="line line-one"></div>
                            <div className="icon">
                                <i className="fas fa-hotdog"></i>
                            </div>
                            <div className="line line-two"></div>
                            <div className="item ">
                                <div className="item-title">
                                    Cooking
                                </div>
                                <div className="item-text">
                                    We use only the freshest ingredients. That is why our reviews are so positive.
                                    If you doubt the benefits of quality ingredients, come in and taste the difference!
                                    <div className="goal">The best quality for you</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 serv-it">
                            <div className="line line-one"></div>
                            <div className="icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className="line line-two"></div>
                            <div className="item">
                                <div className="item-title">
                                    Delivery
                                </div>
                                <div className="item-text">
                                    We provide food delivery services. If the time taken to deliver your food is more than 30 minutes, you will get the bonus.
                                    You can also pay for order by credit card.
                                    <div className="goal">Extremly fast delivery</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Services;