import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import sabImage from '../../../styles/img/Sabellax.png'

const content = [
    "Sabellax is an abnormality regarding Vrioskan nomenclature, as he is not exactly a lizardfolk nor are they exactly a human. We would call them a Kobold, \
    but Lower Draconic has no language for a creature of this nature. There exists no historical precedent for a creature that is only part Drake, for they \
    were far too proud to 'taint' their blood with that of lesser species. Sabellax is rarely seen without his mount Nidhogg (TODO: Link)",
    "Sabellax is an ecentric figure, lacking in knowledge of social cues and with a distaste or lack ofunderstanding for government he yet expresses a cunning knowledge of military strategy and battlefield prowess.",
    "",
    "",
    ["Quest: Meet with local alchemists/botanists to discuss the anamolous rot infecting Icarian flora | Reward: Whenever you roll a nature or survival check pertaining to the flora or fauna of Icarus your proficiency bonus is doubled.",
        "Quest: Discover and quell the cause of the aforementioned rot. | Reward: Festering Bow"
    ],
]
const Sabellax = () => {
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
                        charName={'Sabellax'}
                        imageURL={sabImage}
                        fullName="Sabellax Stalleskur"
                        pronouns="He/They"
                        aliases=""
                        race="Kobold"
                        classType="Beastheart (Hunter)"
                        age="22 years"
                        languages="Lower Draconic (Common), Deep Speech, Abyssal"
                        places="Luodon (TODO: Link)"
                        family="???"
                        connections="SOLO (TODO: Link)"
                        professions="???"
                    />
                </div>
            </div>
        </div>
      );
};

export default Sabellax;