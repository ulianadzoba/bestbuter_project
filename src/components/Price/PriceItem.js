import React, { Component } from 'react';
import { Link } from 'react-scroll';

class PriceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-9 col-10">
                <div className="price-item">
                    <div className="title">
                        {this.props.info.title}
                    </div>
                    <div className="price-logo">
                        <div className="line"></div>
                        <div className="icon">
                            <i className={`fas ${this.props.info.icon}`}></i>
                        </div>

                    </div>
                    <div className="price-amount">
                        <div className="currency">&#36;</div>
                        <div className="sum">{this.props.info.price}</div>
                    </div>
                    <div className="composition">
                        {this.props.info.text}
                    </div>

                    <div className="button-buy">
                        <Link activeClass="active" to="footer" spy={true} smooth={true} duration={700}>
                            <button>Buy now</button>
                        </Link>
                    </div>
                </div>
            </div >
        );
    }
}

export default PriceItem;