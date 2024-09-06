import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import neoImage from '../../../styles/img/Neomona.png'

const content = [
    "Neomona is a comparitively dark skinned drow who stands at approximately 6' 1\". She is commonly seen wearing Page's robes when in public and can be spotted in a crowd via her oversized stereotypical wizard hat.",
    "",
    "Neomona has been very secretive about her upbringing thus far, but she claims to have been a student of the Library for as long as she can remember.",
    "Neomona self describes as having trouble making friends. \
        Within the party, Neo has become the self appointed and often begrudged guardian of Percy and Blue. \
        She is highly suspicious of Rosen",
    [
        "Quest: Interview the Tidecaller, acquire information regarding the appointment process | Reward: 2x free spell scrolls of your choosing from the Icarus Librarian's collection.",
        "Quest: Decypher Cloud's research notes & Personal journal |\
        Reward: Insight into the creation and purpose of the False Drake Tooth, and how to commune with it"
    ],
]

const Neomona = () => {
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
                        charName={'Neomona'}
                        imageURL={neoImage}
                        fullName="Neomona"
                        pronouns="She/Her"
                        aliases=""
                        race="Drow"
                        classType="Wizard (Divination)"
                        age="75 years"
                        languages="Lower Draconic (Common), Elvish, Deep Draconic (Undercommon), Dwarvish, Sylvan"
                        places="Apocryphal Library"
                        family="???"
                        connections="SOLO (TODO: Link)"
                        professions="Page of the Apocryphal Library"
                    />
                </div>
            </div>
        </div>
      );
}

export default Neomona;