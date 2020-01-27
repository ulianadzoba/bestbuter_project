import React, { Component } from 'react';
import PriceContainer from './PriceContainer';
import './Price.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import ZigZagLine from '../ZigZagLine/ZigZagLine';

class Price extends Component {
    state = {
        info: [{
            title: 'Your own buters',
            icon: 'fa-user',
            price: 5,
            text: 'You will get a set of the most delicious buters'
        },
        {
            title: 'Buters for company',
            price: 10,
            icon: 'fa-user-friends',
            text: 'You obtain a great buter lanch for your company'
        },
        {
            title: 'Buters for party',
            price: 20,
            icon: 'fa-bomb',
            text: 'The best starter for your party with friends'
        }
        ]
    }

    render() {
        return (
            <section className="price" id="price">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 section-title">
                            Price
                            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                                <ZigZagLine />
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-10 section-main-text text-center">
                            At BEST BUTER, we offer you great services on an affordable prices

                        </div>
                    </div>
                    <PriceContainer info={this.state.info} />
                </div>
            </section>
        );
    }
}

export default Price;