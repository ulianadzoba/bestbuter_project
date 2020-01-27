import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.scss';

class Map extends Component {
    render() {

        let myIcon = require('leaflet').icon({
            iconUrl: require('../../img/buter-logo.jpg'),
            iconSize: [60, 52],
            iconAnchor: [32, 64],
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null
        });

        return (
            <div className="map">
                <LeafletMap
                    center={[48.917, 24.715]}
                    zoom={15}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[48.916, 24.712]} icon={myIcon}>
                        <Popup>
                            <div>BEST BUTER CAFE</div>
                            <div>Melnika street 8</div>
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        );
    }
}

export default Map;


