import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        info: true
    }
    showInfo() {
        this.setState({
            info: !this.state.info
        })
    }
    render() {
        return (
            <div className="img-wrap" >
                <img src={this.props.buter.image} alt="buter" />
                <div className={`img-hover ${this.state.info ? "" : "show"}`} onClick={this.showInfo.bind(this)}>
                    <div className="img-text" >
                        <div className="buter-name">
                            {this.props.buter.name}
                        </div>
                        <div className="ingredients-title">Ingredients:</div>
                        <div className="ingredients">
                            {this.props.buter.ingredients}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryItem;