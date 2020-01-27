import React, { Component } from 'react';
import './History.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import ZigZagLine from '../ZigZagLine/ZigZagLine';

class History extends Component {
    state = {}
    render() {
        return (
            <section className="history">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 section-title">
                            History
                            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
                                <ZigZagLine />
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center">
                        <div className="col-xl-10 section-main-text text-center">
                            BEST BUTER was founded to bring the people and visitors a multi-sensory experience of quality food
                        </div>
                    </div>

                    <div className="history-design">
                        <div className="line line-sm"></div>

                        <div className="year-2018">
                            <div className=" row justify-content-center text-center">
                                <div className="year">2018</div>
                            </div>

                            <div className="history-container row justify-content-between no-gutters">
                                <div className="history-left col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-left col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-left">
                                                <div className="event-title">BEST BUTER ever-changing</div>
                                                <div className="event-date">03 October 2018</div>
                                                <div className="event-description">The company has been actively developing over the last year.
                                                We have received a number of awards, among them TripAdvisor's and Revisor's honors.
                                                Today we have the ambitious goal of opening a few more food establishments.

                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-right history-container col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-right col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-right">
                                                <div className="event-title">BEST BUTER cafe was opened</div>
                                                <div className="event-date">02 July 2018</div>
                                                <div className="event-description">First BEST BUTER cafe was opened.
                                                It took almost half year to find the best location and complete the repair and construction works.
                                                At that time, the company had 17 employees. BEST BUTER cafe worked from 9.00 to 22.00.
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="history-container row justify-content-between no-gutters">
                                <div className="history-left col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-left col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-left">
                                                <div className="event-title">BEST BUTER took part in competition</div>
                                                <div className="event-date">22 June 2018</div>
                                                <div className="event-description">BEST BUTER first time took part in catering competition. It was a great experience for us.
                                                We started collaboration with those who share our beliefs in good healthy food for all.

                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-right col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-right col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-right">
                                                <div className="event-title">First selling point was opened</div>
                                                <div className="event-date">01 Aprill 2018</div>
                                                <div className="event-description">BEST BUTER opened first selling point.
                                                The area was only a few square meters. It was really hard times for company, since the rent was high.
                                                BEST BUTER worked 24 hours.
                                                It was the only one place, where parties man could buy something to eat at 4:00 AM, after the party was over.


                                        </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="year-2017">
                            <div className="year-icon row justify-content-center text-center">
                                <div className="year ">2017</div>
                            </div>

                            <div className="history-container row justify-content-between no-gutters">
                                <div className="history-left col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-left col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-left">
                                                <div className="event-title">Creating Instagram account</div>
                                                <div className="event-date">11 December 2017</div>
                                                <div className="event-description">Instagram account was created.
                                                BEST BUTER staff include three person: chef, salesperson and delivery man. Our services are popular for big events or as appetizer for paties.

                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-right col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="row no-gutters">
                                        <div className="item-right col-xl-12">
                                            <div className="event-circle"></div>
                                            <div className="event event-right">
                                                <div className="event-title">The idea was born</div>
                                                <div className="event-date">07 October 2017</div>
                                                <div className="event-description">The idea of food delivery was born. The place where everyone can find delicious food and get it delivered to their home in 30 minutes.


                                        </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="light-container row justify-content-center text-center">
                            <div className="light"><i className="far fa-lightbulb"></i></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;