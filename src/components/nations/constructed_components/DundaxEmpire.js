import React from 'react';
import HistoryContent from '../base_components/HistoryContent';
import HistorySidebar from '../base_components/HistorySidebar';
import dundaxImage from '../../../styles/img/Blue.png'

const geography = {
    html: <div>
        <h3>Marrowborne Mountains</h3>
        <p>The Marrowborne mountains span most of easter Wiondir, extending from the Wastes well into the Empire. It is here that the tallest mountains on the continent can be found, a trio of them coloquially referred to as the 'Kingsgrave Mountains.' Some believe these mountains to be where the Three Kings fell when Aa slew them.</p>
        {/* TODO: Add heading linking to aberdeen and crail alongside brief descriptions */}
        <h3>Ashkeeper Valley</h3>
        <h3>Orey River</h3>
        <h2>Amber Road</h2>
        {/* TODO: Add shit for Elmswell and Luodon */}
        <h3>Cyrenpress Thicket</h3>
        <p>Located to near the northeast corner of Fife.</p>
        {/* TODO: Add shit for Fife */}
        <h3>Zeidel Fields</h3>
        <p>The Zeidel Fields were the birthplace of the Dundaxian Empire. After establishing themselves in Icarus, Dundax's band moved southward into these fields. Much of Dundaxian culture originated here
            as the Empire culturally absorbed what they could and killed what they couldn't. Indeed, the Dundaxian dialect of Lower Draconic is known as Zeidellian</p>
        <h3>Blumgarden Mountains</h3>
        <p>Lying on the western portion of the border wall of the Dundaxian Empire. </p>
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