import React, { Component } from 'react'
import Map from './Map'
import Sidebar from './Sidebar'

export default class MapContainer extends Component {
    state = {
        visibleSidebar: false
    }

    showSidebar = () => {

    }

    render() {
        return (
            <>
                <Sidebar />

                {/* Botón */}
                <Map />
            </>
        )
    }
}
