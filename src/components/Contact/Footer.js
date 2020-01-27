import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';
import ClientContext from '../ClientContext/ClientContext';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            web: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log(this.state.name);
        event.preventDefault();
    }
    render() {
        return (
            <section className="footer" id="footer">
                <div className="container">
                    <div className="row justify-content-start">
                        <Logo></Logo>
                    </div>
                    <div className="row footer-info">
                        <div className="col-xl-4 col-lg-4">
                            <div className="footer-text">
                                We are team of young enthusiasts and food lovers, who collaborate to create a hight quality product.
                                Try it once and you'll never regret.
                            </div>
                            <div className="cafee-name">
                                Best Buter cafee
                            </div>
                            <div className="adress">

                                Melnika street 8, Ivano-Frankivsk, Ukraine
                            </div>
                            <div className="email">
                                best-buter@gmail.com
                            </div>
                            <div className="phone">+380663338888</div>
                        </div>
                        <div className="col-xl-8 col-lg-8 footer-form">
                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="row name-email ">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 input-name">
                                        <input className="input"
                                            name="name"
                                            type="text" placeholder="Name*"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="input"
                                            name="email"
                                            type="email"
                                            placeholder="E-mail"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row phones ">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 input-phone">
                                        <input className="input"
                                            type="text"
                                            placeholder="Phone*"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                                        <input className="input"
                                            type="text"
                                            placeholder="Adress"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="row message ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 ">
                                        <ClientContext.Consumer>
                                            {(context) => (
                                                <input className="input"
                                                    type="text"
                                                    placeholder="Message*"
                                                    value={context.state.text}
                                                    onChange={this.handleChange} />
                                            )}

                                        </ClientContext.Consumer>
                                    </div>
                                </div>
                                <div className="row footer-button">
                                    <div className="col-xl-2 col-lg-3 col-md-4">
                                        <input className="button" type="submit" value="Contact us"></input>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="row">
                        <SocialLinks />
                    </div>

                    <div className="footer-line">
                        <span><i className="far fa-copyright"></i></span> 2020. BB GROUP.
                        All rights reserved

                    </div>

                </div>


            </section>
        );
    }
}

export default Footer;