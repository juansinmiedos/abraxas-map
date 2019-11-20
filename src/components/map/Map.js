import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnNpbm1pZWRvcyIsImEiOiJjazBkeG5yMjAwYmh1M2dwbXBreGhwaHowIn0.R0mwPQ9Ja7NH7AisDAeNvw';

export default class Map extends Component {
    state = {
        lng: -101.3544964,
        lat: 20.6786652,
        zoom: 6.8
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} id='mapContainer' className="mapContainer" />
            </div>
        )
    }
}