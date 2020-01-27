import React, { Component } from 'react';

class AboutPartTwo extends Component {
    render() {
        return (
            <div className="about-part-two container">
                <div className="row justify-content-center text-center">
                    <div className="about-item row-one col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="about-achivement-icon"><i className="fas fa-award"></i></div>
                        <div className="about-achivement-title">AWARDS WON</div>
                        <div className="about-achivement-number">11</div>
                    </div>
                    <div className="about-item row-one col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 about-border">
                        <div className="about-achivement-icon"><i className="far fa-check-square"></i></div>
                        <div className="about-achivement-title">Buters done</div>
                        <div className="about-achivement-number">12761</div>
                    </div>
                    <div className="about-item row-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 about-border without-border">
                        <div className="about-achivement-icon"><i className="far fa-smile"></i></div>
                        <div className="about-achivement-title">Happy clients</div>
                        <div className="about-achivement-number">7320</div>
                    </div>
                    <div className="about-item row-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 about-border">
                        <div className="about-achivement-icon"><i className="far fa-address-book"></i></div>
                        <div className="about-achivement-title">reviews recieved</div>
                        <div className="about-achivement-number">66</div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AboutPartTwo;