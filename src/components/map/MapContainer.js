import React, { Component } from 'react'
import Map from './Map'

export default class MapContainer extends Component {
    state = {
        visibleSidebar: false,
        region: 'Sector 1'

    }

    showSidebar = () => {
        if(this.state.visibleSidebar){
            this.setState(prevState => {
                return{
                    ...prevState,
                    visibleSidebar: false
                }
            })
        } else{
            this.setState(prevState => {
                return{
                    ...prevState,
                    visibleSidebar: true
                }
            })
        }
    }

    handleInput = (e) => {
        e.persist()
        this.setState(prevState => {
            return{
                ...prevState,
                region: e.target.value
            }
        });
    }

    render() {
        return (
            <>
                {this.state.visibleSidebar && <div className="overmap-bar">
                    <h1>Abraxas</h1>
                    <h4>Sectores</h4>
                    <hr />
                    <form action="">
                        <input onChange={this.handleInput} type="radio" name="region" value="Sector 1" />Sector 1
                        <input onChange={this.handleInput} type="radio" name="region" value="Sector 2" />Sector 2
                    </form>
                </div>}

                <button className={this.state.visibleSidebar ? "overmap-button-open" : "overmap-button"} onClick={this.showSidebar}>Menú</button>

                <Map region={this.state.region} />
            </>
        )
    }
}
