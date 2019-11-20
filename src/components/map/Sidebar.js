import React, { Component } from 'react'

export default class Sidebar extends Component {
    state = {
        
    }

    onChange = () => {

    }

    render() {
        return (
            <div className="overmap">
                <h1>Hola mapa</h1>
                <form action="">
                    <input type="radio" name="region" value="Sector 1" />Sector 1
                    <input type="radio" name="region" value="Sector 2" />Sector 2
                </form>
            </div>
        )
    }
}
