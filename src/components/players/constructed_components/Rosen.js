import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import rosenImage from '../../../styles/img/Rosen.png'

const content = [
    "Rosen is a relatively tall Duergar whose face shows his age. He is most commonly seen wearing a well polished suit of armor or otherwise casual clothing befitting someone of noble station. \
        His shield bares the heraldry of the Kalatonian (TODO: Link) military",
    "Very tired, all the time",
    "",
    "Rosen has not formed close relationships with any specific members of the party, but seems to express interest in Neomona.",
    [
    ],
]

const Rosen = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className ="character-container">
                    <PlayerContent
                        appearanceContent={content[0]}
                        personalityContent={content[1]}
                        biographyContent={content[2]}
                        relationshipsContent={content[3]}
                        characterInfoContent=""
                        completedQuestsItems={content[4]}
                    />
                    <PlayerSidebar
                        charName={'Rosen'}
                        imageURL={rosenImage}
                        fullName="Rosen Graves"
                        pronouns="He/Him"
                        aliases=""
                        race="Duergar"
                        classType="Illrigger (Hellspeaker)"
                        age="172 years"
                        languages="Lower Draconic (Common), Deep Draconic (Undercommon), Dwarvish, Elvish, Infernal, Abyssal, Primordial"
                        places="Kalatonia"
                        family="???"
                        connections="SOLO (TODO: Link)"
                        professions="Knight of [???]"
                    />
                </div>
            </div>
        </div>
      );
}

export default Rosen;