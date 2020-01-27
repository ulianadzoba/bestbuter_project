import React, { Component } from 'react';
import PriceItem from './PriceItem';

class PriceContainer extends Component {
    render() {
        return (
            <div className="row price-container justify-content-center">
                <PriceItem info={this.props.info[0]} />
                <PriceItem info={this.props.info[1]} />
                <PriceItem info={this.props.info[2]} />
            </div>
        );
    }
}

export default PriceContainer;