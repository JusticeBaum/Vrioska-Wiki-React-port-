import CityContent from '../base_components/CityContent'
import CitySidebar from "../base_components/CitySidebar";

const content = {
    desc: "",
    mapURL: '../../../styles/img/Aberdeen_map.jpg'
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
    districts: <ul>
    <li>Graves</li>
    <li>Idleworks Shelf</li>
    <li>Iron Lot</li>
    <li>Assembly Yard</li>
</ul>,
};

const societyInfo = {
    population: "~12,000",
    races: "Majority: Gnome, Minority: Dwarf, Human",
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
                imageURL={""}
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