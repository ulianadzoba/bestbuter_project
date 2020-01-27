import React, { Component } from 'react';
// import './Contact.scss';
import Author from './Author';
import Map from './Map';
import Footer from './Footer';

class Contact extends Component {
    state = {}
    render() {
        return (
            <div id="contact">
                <Author></Author>
                <Map></Map>
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;