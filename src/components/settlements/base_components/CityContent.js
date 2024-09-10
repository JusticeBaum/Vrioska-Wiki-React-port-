import React from 'react'
import Map from '../../Map';

const CityContent = ({
    content: {desc, mapURL, society, points, history}
}) => {
    return (
        <section className="content">
            <h2>City Description</h2>
                {desc}
            <h2>Society</h2>
                {society}
            <h2>Points of Interest</h2>
                {points}
            <h2>History</h2>
                {history}
            <h2>Map</h2>
                <Map url={mapURL}/>
        </section>
    );
};

export default CityContent

