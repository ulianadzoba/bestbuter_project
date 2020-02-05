import React from 'react';
import AboutPartOne from './AboutPartOne';
import AboutPartTwo from './AboutPartTwo';
import './About.scss';

export default function About() {
    return (
        <section className="about" id="about">
            <AboutPartOne></AboutPartOne>
            <AboutPartTwo></AboutPartTwo>
        </section>
    );
}
