import React from 'react';
import photo from '../../img/Chef.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import './Author.scss';

export default function Author() {
    return (
        <section className='author' >
            <div className="container">
                <div className='author-photo'>
                    <ScrollAnimation animateIn="zoomIn" initiallyVisible={true}>
                        <img src={photo} alt="chef" />
                    </ScrollAnimation>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-8">
                        <div className="quote">
                            <span className="sign">&#8220;</span>
                            Life is like a sandvich - the more you add to it, the better it becomes
                                	<span className="sign">&#8221;</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-xl-3">
                        <div className="author-name">
                            Uliana Dzoba
                            </div>
                        <div className="owner"> BEST BUTER OWNER</div>
                    </div>
                </div>
            </div>
        </section>
    );
}


