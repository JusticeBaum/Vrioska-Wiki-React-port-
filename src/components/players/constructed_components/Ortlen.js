import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import ortImage from '../../../styles/img/Ortlen.png'

const content = [
    "",
    "",
    "",
    "",
    [
    ],
]

const Ortlen = () => {
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
                        charName={'Ortlen'}
                        imageURL={ortImage}
                        fullName="Ortlen"
                        pronouns="?"
                        aliases=""
                        race="Tortle"
                        classType="Rogue, Barbarian"
                        age=""
                        languages="Lower Draconic (Common), Thieve's Cant"
                        places="Icarus"
                        family="Brom (Father figure)"
                        connections="SOLO (TODO: Link)"
                        professions="Pirate"
                    />
                </div>
            </div>
        </div>
      );
}

export default Ortlen;