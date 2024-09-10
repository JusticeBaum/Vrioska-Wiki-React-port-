import CityContent from '../base_components/CityContent'
import CitySidebar from "../base_components/CitySidebar";
import map from "../../../styles/img/Aberdeen_map.jpg"

const content = {
    desc: "",
    mapURL: map,
    society: "",
    points: "",
    history: ""
}

const generalInfo = {
    name: 'Aberdeen',
    constructed: '',
    leader: '',
    currentLead: ""
}

const locationInfo = {
    plane: "Crossroads (Prime Material)", 
    contienent: "Wiondir", 
    region: "Marrowborne Mountains",
    districts: 
    <ul>
        <li>Graves</li>
        <li>Idleworks Shelf</li>
        <li>Iron Lot</li>
        <li>Assembly Yard</li>
    </ul>,
};

const societyInfo = {
    population: "~12,000",
    races: 
        <ul>
            <li>Majority: Gnome</li>
            <li>Minority: Dwarf, Human</li>
        </ul>,
    affiliation: "Dundaxian Empire"
};

const Aberdeen = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className='character-container'>
                    <CityContent
                        content={content} 
                    />
                    <CitySidebar
                        imageURL={map}
                        generalInfo={generalInfo}
                        locationInfo={locationInfo}
                        societyInfo={societyInfo}
                    />
                </div>
            </div>
        </div>
    );  
};

export default Aberdeen;