import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class GalleryColumn extends Component {
    state = {}
    render() {
        return (
            <div className="column">
                <GalleryItem buter={this.props.buters[0]} />
                <GalleryItem buter={this.props.buters[1]} />
            </div>
        );
    }
}

export default GalleryColumn;