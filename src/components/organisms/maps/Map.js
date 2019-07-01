import React from 'react';
import MapComponent from '../../atoms/maps/MapComponent';
import { MapPanel } from '../../molecules/maps/MapPanel';
import { buildMap } from '../../maps/MapEngine'
import { MAIN_MAP_KEY } from '../../maps/MapConstants';

export default class Map extends React.Component {

    state = {
        map: undefined,
    }

    handleRef = (node) => {
        if (this.state.map || !node) return;
        console.log(node);
        buildMap(node, MAIN_MAP_KEY)
            .then(map => this.setState({map}));
    }

    render() {
        return (
            <MapPanel>
                <MapComponent ref={this.handleRef}/>
            </MapPanel>
        )

    }

}