import React from "react";
import CityContent from "../base_components/CityContent";
import CitySidebar from "../base_components/CitySidebar";
import map from '../../../styles/img/icarus_map.jpg'

const images = [
    <img key = "0" src = { map } />,
];

const content = {
    desc: "",
    mapURL: map,
    society: "",
    points: "",
    history: ""
};

const generalInfo = {
    name: 'Icarus',
    constructed: '',
    leader: '',
    currentLead: ""
};

const locationInfo = {
    plane: "Crossroads (Prime Material)", 
    contienent: "Wiondir", 
    region: "Eastern coast",
    districts: 
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>,
};

const societyInfo = {
    population: "",
    races: 
        <ul>
            <li>Majority:</li>
            <li>Minority:</li>
        </ul>,
    affiliation: "Dundaxian Empire"
};

const Icarus = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className='character-container'>
                    <CityContent
                        content={content} 
                    />
                    <CitySidebar
                        images={images}
                        generalInfo={generalInfo}
                        locationInfo={locationInfo}
                        societyInfo={societyInfo}
                    />
                </div>
            </div>
        </div>
    );
};

export default Icarus