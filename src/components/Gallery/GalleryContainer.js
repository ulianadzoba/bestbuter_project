import React, { Component } from 'react';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';

import GalleryColumn from './GalleryColumn';


class GalleryContainer extends Component {
    state = {
        info: [[{
            image: img1,
            name: 'Friendly shrimp',
            ingredients: 'Cream cheese, shrimps, garlic, spinach'
        },
        {
            image: img2,
            name: 'Fresh avocado',
            ingredients: 'Avocado, basil, cheese'
        }],
        [{
            image: img4,
            name: 'Strong salmon',
            ingredients: 'Cream cheese, salmon, basil'
        },
        {
            image: img3,
            name: 'Cool pepper egg',
            ingredients: 'Butter, ham, bacon, egg, pepper'
        }],
        [{
            image: img5,
            name: 'Friendly shrimp',
            ingredients: 'Cream cheese, shrimps'
        },
        {
            image: img7,
            name: 'Meat mix',
            ingredients: 'Cream cheese, ham, sausage, bacon'
        }],
        [{
            image: img6,
            name: 'Cool egg',
            ingredients: 'Butter, ham, bacon, egg'
        },
        {
            image: img8,
            name: 'Fresh avocado',
            ingredients: 'Avocado, basil, cheese'
        }]]
    }
    render() {
        return (
            <div className="gallery-container">
                <GalleryColumn buters={this.state.info[0]} />
                <GalleryColumn buters={this.state.info[1]} />
                <GalleryColumn buters={this.state.info[2]} />
                <GalleryColumn buters={this.state.info[3]} />
            </div >
        );
    }
}

export default GalleryContainer;