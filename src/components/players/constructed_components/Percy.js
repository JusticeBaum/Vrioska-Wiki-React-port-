import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import percyImage from '../../../styles/img/Percy.png'

const content = [
    "",
    "Sleepy",
    " Percy is filled with adolescent naivety she tries, and fails, to cover up. She is somewhat misguided when it comes to interacting with others but is often well-intentioned. What she wants most is to be someone who matters, and who will be remembered in spite of her own problems with memory.",
    "Percy can most commonly be found commiting acts of mischief with Blue, and seems to somewhat look up to Neomona. Percy is consistently followed by a spirit made entirely of smoke, whom takes the form of a cat. Perspehone has named this creature 'Alistair.'",
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
                        imageURL={percyImage}
                        fullName="Persephone Calla Granosh"
                        pronouns="She/Her"
                        aliases=""
                        race="Tiefling"
                        classType="Druid (Wildfire)"
                        age="17 years"
                        languages="Lower Draconic (Common), Infernal, Druidic, Abyssal"
                        places="Farlow (TODO: Link)"
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