import CityContent from '../base_components/CityContent'
import CitySidebar from "../base_components/CitySidebar";
import map from "../../../styles/img/Aberdeen_map.jpg"

const images = [
    <img key = "1" src = {map}/>,
]
const content = {
    desc: <p style={{fontSize: 19}}>Aberdeen is a three tiered city built into the Marrowborne mountain range within the eastern Dundaxian empire. The city is seated across the three tallest mountains in the range. These are colloquially referred to as the 'Kingsgrave Mountains'
    and is said to be where the corpses of the three Kings fell after Aa slew them (predominant theology here is that they were slain, not sealed nor banished).</p>, 
    mapURL: map,
    society: <p>Aberdeen is predominantly a mining town, and is responsible for forging a vast
    majority of Dundaxian military arms. The town is reportedly a 'ghost town' during working hours, which range from dawn to dusk. The town also has a thriving nightlife, due to its predominantly 
    Gnomish culture and harsh working conditions. It is not uncommon for there to be nightly fireworks shows and street performances.</p>,
    points:
        <div className='points'>
            <ul>
                {/* Graves */}
                <li>Steelbringer Smithy & Enchanthing</li>
                <li>Neverbend Forge</li>
                <li>Kingsgrave Mines</li>
            </ul>
            <ul>
                {/* Idleworks Shelf */}
                <li>Lanternlight Tavern</li>
                <li>Firemark Facility</li>
                <li>Lay of the Land Herbalist</li>
                <li>Bent Binding</li>
                <li>Prayer Foundry</li>
                <li>Schuster's Butcher</li>
                <li>Whatever the Fuck General Store</li>
            </ul>
            <ul>
                {/* Lower tier */}
                <li>Ironlot</li>
                <li>Armavault</li>
                <li>Sootswallow Lodge</li>
                <li>Winch Lift</li>
                <li>Omnismelter</li>
                <li>Gearhole Prison</li>
                <li>Deepmine Prison</li>
                <li>Assembly Yard</li>
            </ul>
        </div>,
    history: <p>Aberdeen was originally a small settlement in the early days of the Empire. Once imperial hegemony
         was more established in Wiondir the city began to grow in size, and grew upward instead of outward to show the residents engineering prowess.</p>
}

const generalInfo = {
    name: 'Aberdeen',
    constructed: '',
    leader: 'Crown appointed Starosta ',
    currentLead: "Emma Zezbok"
}

const locationInfo = {
    plane: "Crossroads (Prime Material)", 
    contienent: "Wiondir", 
    region: "Marrowborne Mountains",
    districts: 
    <ul>
        <li>Graves</li>
        <li>Idleworks Shelf</li>
        <li>Ashlots</li>
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

export default Aberdeen;