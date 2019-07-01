import React from 'react';

const mapStyle = {
    width: '100%',
    height: '100%'
}

const MapComponent = React.forwardRef((props, ref) => (
    <div style={mapStyle} ref={ref} {...props} id="map">{props.children}</div>
))
export default MapComponent;
