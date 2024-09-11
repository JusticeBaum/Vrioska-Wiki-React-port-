import React from 'react';
import HistoryContent from '../base_components/HistoryContent';
import HistorySidebar from '../base_components/HistorySidebar';
import dundaxImage from '../../../styles/img/dundax_arms.png'

const geography = {
    html: <div>
        <h3>Marrowborne Mountains</h3>
        <p>The Marrowborne mountains span most of easter Wiondir, extending from the Wastes well into the Empire. It is here that the tallest mountains on the continent can be found, a trio of them coloquially referred to as the 'Kingsgrave Mountains.' Some believe these mountains to be where the Three Kings fell when Aa slew/banished/??? them.</p>
        {/* TODO: Add heading linking to aberdeen and crail alongside brief descriptions */}
        <ul>
            <li>Aberdeen: Mining city nestled amongst the Kingsgraves, where the Empire sources most of their ores and weapons.</li>
            <li>Crail: A fortified settlement nestled deep within the Marrowbornes. Home to the renowned mercenary group 'Knights of Crail' (TODO: Add links) </li>
        </ul>
        <h3>Ashkeeper Valley</h3>
        <h3>Orey River</h3>
        <li>Icarus: Former imperial capital, now a port city responsible for a sizeable amount of maritime trade.</li>
        <h2>Amber Road</h2>
        {/* TODO: Add shit for Elmswell and Luodon */}
        <h3>Cyrenpress Thicket</h3>
        <p>Located to near the northeast corner of Fife.</p>
        <li>Fife: Imperial capital</li>
        {/* TODO: Add shit for Fife */}
        <h3>Zeidel Fields</h3>
        <p>The Zeidel Fields were the birthplace of the Dundaxian Empire. After establishing themselves in Icarus, Dundax's band moved southward into these fields. Much of Dundaxian culture originated here
            as the Empire culturally absorbed what they could and killed what they couldn't. Indeed, the Dundaxian dialect of Lower Draconic is known as Zeidellian</p>
        <h3>Blumgarden Mountains</h3>
        <p>Lying on the western portion of the border wall of the Dundaxian Empire, this small cluster of mountains intersects with the border wall. There exists a heavily guarded, little known passage for land expeditions into 
            the Wastes.
        </p>
    </div>
}

const environment = {
    html: <div>
        <h3>Border wall</h3>
        <p>Penrith: Contains the headquarters of the eastern chapter of the Horizon Walkers.</p>
    </div>
};

const society = {
    html: <div>
        <h3>Attitude towards adventurers</h3>
        <p>The citizenry of the Empire at large treat bands of adventurers and mercs as one would treat rock stars of old. Indeed, once officially registered with the government as a merc group they
            officially referred to as a 'Band'. Officially registered groups are eligible for government contracts. Unregistered groups enjoy fame all the same, and it is not uncommon to find 
            tournaments pitting band against band across the Empire.            
        </p>
        <h3>Attitude toward government</h3>
        <p>The citizenry of the Empire typically regard the government with some level of contempt, with a common complaint being that the Empire at large caters too heavily toward the nobility
            both in terms of laws and leniency toward said laws, whereas commonfolk are held to a much stricter standard and awarded significantly less opportunities. The Dundaxian people are also deeply
            religious, with idolatry being a crime that is heavily punished socially, if the Crownsguard doesn't get to you first. ACting in line with their doctrine Dundaxians are particularly invigorated
            in their hatred of the Outer Planes and influences thereof.

        </p>
    </div>
}

const military = {
    html: <div>
        <p>The Dundaxian military is divided into three branches: Crownsguard, Horizon Walkers, Horizon Walkers, and Lucient Blades,. Within these branches there exist special regiments which are
            detailed in their respective branch's section.</p>
        <h3>Crownsguard</h3>
            <p>The Crownsguard are a paramilitary gendarmerie that also has the authority to act as a secret police or intelligence gathering force.</p>
        <h3>Lucient Blades</h3>
            <p>The Lucient Blades are tasked with handling all domestic and international empirical threats and are led by Jenova Rothfuss (TODO: Link), who is said to have been touched by an avatar of Vanitas.</p>
        <h3>Horizon Walkers</h3>
            <p>The Horizon Walkers are specifically crafted to deal with threats that are born from any planes outside the Crossroads. All Walkers are required to have some basic casting
        ability and are led by the minotaur Vi (TODO: Link).</p>
    </div>
}

const religion = {
    html: <div>
        <p>Dundaxian polytheism is the sole religion accepted by the Dundaxian government, and idolatry is punished heavily. They are, however, tolerant of alternative sects devoted to their deities
            and are not picky about how worship is done, just that it is.
        </p>
        <h3>Aa, the Lightbringer</h3>
            <p><strong>Description</strong></p>
            <p>Aa is responsible for the construction of the Inner Planes, and for maintaining the Rift that separates them from the Outer Planes. After undertaking in the gargantuan task of Creation,
                Aa is said to have birthed seven children/aspects that took the form of the colors under the visual spectra. These children together created all life, starting with the dragons. Over time,
                these children grew greedy and began coveting each other's power. This resulted in a bloody war, which left only three: the archetypal Three Kings 
            </p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul>
                <li>Church of Aa</li>
                <li>Horizon Walkers</li>
            </ul>
            <p>Symbology</p>
            <ul>
                <li>Four interlocking circles</li>
                <li>Bird in flight</li>
                <li>Six pointed sun</li>
            </ul>
        <h3>Altiora, the Falling Titan</h3>
            <p><strong>Description</strong></p>
            <p>It is commonly believed that the Falling Titan was the first to be pulled from the void by the mighty Aa. Altiora was granted dominion over the minds of man, and thus the pursuit of knowledge.
                She is commonly depicted as a triclopean humanoid, and Vrioska's three moons are said to be her eyes.
            </p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul>
                <li>Apocryphal Library (TODO: Link)</li>
            </ul>
            <p><strong>Symbology</strong></p>
                <ul>
                    <li>Lotus flowers</li>
                    <li>Anything occuring in groups of three</li>
                    <li>Burning candle</li>
                    <li>Open tomes</li>
                </ul>
        <h3>Gaius, the Unmoving</h3>
            <p><strong>Description</strong></p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul></ul>
            <p><strong>Symbology</strong></p>
        <h3>Kharon, the Wavemaker</h3>
            <p><strong>Description</strong></p>
            <p>Khraon bears dominion over the seas and all that happens therein. Due to the enormity of this domain, they are the second most worshipped deity in the Empire, second only to Aa itself.
                Naturally, worship of Khraon is borderline required amongst sailors, and they are said to be the most spiteful of all the deities. Khraon has no common physical depiction, for how does one
                humanize the amorphous depths?
            </p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul>Ferrymen (TODO: Link)</ul>
            <p><strong>Symbology</strong></p>
            <ul>
                <li>Boat</li>
            </ul>
        <h3>Solach, the Ashen Consumer</h3>
            <p><strong>Description</strong></p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul>
                <li>Cindered Convent (TODO: Link)</li>
            </ul>
            <p><strong>Symbology</strong></p>
        <h3>Vanitas, the Terminal</h3>
            <p><strong>Description</strong></p>
            <p>Vanitas is an entity who is primarily associated with the virtues of patience and apathy. After all, death is the ultimate end of all things. There is no need to rush.
            Vanitas oversees the entropic nature of life; They ensure that all that lives must end, and that dust is returned to dust.
            </p>
            <p><strong>Affiliated Insitutions</strong></p>
            <ul>
                <li>Willowed Order (TODO: Link)</li>
            </ul>
            <p><strong>Symbology</strong></p>
            <ul>
                <li>Threaded needle</li>
                <li>Gravedirt</li>
                <li>Humanoid remains</li>
                <li>Armaments of war</li>
            </ul>
    </div>
}

const history = {
    html: <div>
        <h3>Dynastic Lineage</h3>
        <ul>
            <li>Dundax, 1st Lightbringer</li>
            <li>Andronik, 3rd Lightbringer</li>
            <li>Angus, 25th Lightbringer</li>
        </ul>
    </div>
}

// Sidebar information
const generalInfo = {
    nationName: 'Dundaxian Empire',
    fullName: 'Dundaxian Empire',
    type: 'Empire',
    headOfGov: 'Lightbringer / Emperor',
    currentHead: 'Martial Law',
    military: ['Crownsguard', 'Lucient Blades', 'Horizon Walkers']
};

const historyInfo = {
    plane: "Crossroads (Prime Material)",
    continent: "Southern Wiondir",
    capital: "Fife",
    established: "3 PB",
    fell: "N/A" 
};

const cultureInfo = {
    religion: 'Dundaxian Polytheism',
    language: 'Lower Draconic (Common), Elvish',
    population: 'Majority: Human & Elf, Minority: Dwarf & Gnome'
};

const Dundax = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className='character-container'>
                    <HistoryContent
                        geography={geography}
                        society={society}
                        military={military}
                        religion={religion}
                        history={history}
                    />
                    <HistorySidebar 
                        imageURL={dundaxImage}
                        generalInfo={generalInfo}
                        historyInfo={historyInfo}
                        cultureInfo={cultureInfo}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dundax;