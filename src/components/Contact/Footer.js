import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';

const checkEmail = RegExp(`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$`);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            phone: null,
            web: "",
            message: "",
            openForm: false,
            errors: {
                name: '',
                email: '',
                phone: ''
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    (value.length < 5)
                        ? 'Your name must be at least 5 characters'
                        : '';
                break;
            case 'email':
                errors.email =
                    checkEmail.test(value)
                        ? ''
                        : 'Email is not valid';
                break;
            case 'phone':
                errors.phone =
                    (value.length < 9)
                        ? 'Phone must be 9 characters long'
                        : '';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            this.setState({
                openForm: !this.state.openForm
            });
        } else {
            this.setState({
                openForm: this.state.openForm
            });
        }

        event.preventDefault();
    }

    render() {
        const { errors } = this.state;
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
                        <div className={`col-xl-8 col-lg-8 footer-form ${this.state.openForm ? "close-form" : ""} `}>
                            <form action="" onSubmit={event => this.handleSubmit(event)}>
                                <div className="row name-email ">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 input-name">
                                        <input className="input"
                                            name="name"
                                            type="text" placeholder="Name*"
                                            onChange={this.handleChange}
                                        />
                                        {errors.name.length > 0 &&
                                            <div className='error'>{errors.name}</div>}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="input"
                                            name="email"
                                            type="email"
                                            placeholder="E-mail"
                                            onChange={this.handleChange}
                                        />
                                        {errors.email.length > 0 &&
                                            <div className='error'>{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="row phones ">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 input-phone">
                                        <input className="input"
                                            type="text"
                                            name="phone"
                                            placeholder="Phone*"
                                            onChange={this.handleChange}
                                        />
                                        {errors.phone.length > 0 &&
                                            <div className='error'>{errors.phone}</div>}
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                                        <input className="input"
                                            type="text"
                                            placeholder="Adress"

                                            onChange={this.handleChange}
                                        />

                                    </div>
                                </div>
                                <div className="row message ">
                                    <div className="col-xl-12 col-lg-12 col-md-12 ">
                                        <input className="input"
                                            type="text"
                                            placeholder="Message*"
                                            onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row footer-button">
                                    <div className="col-xl-2 col-lg-3 col-md-4">
                                        <input className="button" type="submit" value="Contact us"></input>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className={`col-xl-8 col-lg-8 thank-message ${this.state.openForm ? "close-thank" : ""}`}>
                            <div>Thank You for Your order. Please wait for our call!</div>
                            <div className="return-button">

                                <input className="button" type="submit" value="To home page" onClick={event => this.handleSubmit(event)}></input>
                            </div>
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