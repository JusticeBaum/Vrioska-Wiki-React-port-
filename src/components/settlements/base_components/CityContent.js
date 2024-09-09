import React from 'react'
import Map from '../../Map';

const CityContent = ({
    content: {desc, mapURL, points, history}
}) => {
    return (
        <section className="content">
            <h2>City Description</h2>
            {}
            <h2>Map</h2>
                <Map url={mapURL}/>
            <h2>Society</h2>
            <h2>Points of Interest</h2>
            <h2>History</h2>
        </section>
    );
};

export default CityContent

