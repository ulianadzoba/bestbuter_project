import React, { Component } from 'react';
import AboutPartOne from './AboutPartOne';
import AboutPartTwo from './AboutPartTwo';
import './About.scss';

class About extends Component {
    state = {}
    render() {
        return (
            <section className="about" id="about">
                <AboutPartOne></AboutPartOne>
                <AboutPartTwo></AboutPartTwo>
            </section>
        );
    }
}

export default About;