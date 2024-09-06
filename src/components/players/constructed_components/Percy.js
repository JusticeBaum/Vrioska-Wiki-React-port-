import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
// import percyImage from '../../../styles/img/Percy.png'

const content = [
    "",
    "Sleepy",
    "",
    "Percy can most commonly be found commiting acts of mischief with Blue, and seems to somewhat look up to Neomona",
    [
    ],
]

const Percy = () => {
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
                        charName={'Percy'}
                        imageURL={''}
                        fullName="Persephone Granosh"
                        pronouns="She/Her"
                        aliases=""
                        race="Tiefling"
                        classType="Druid (Wildfire)"
                        age="16 years"
                        languages="Lower Draconic (Common), Infernal"
                        places=""
                        family=""
                        connections="SOLO (TODO: Link)"
                        professions=""
                    />
                </div>
            </div>
        </div>
      );
}

export default Percy;