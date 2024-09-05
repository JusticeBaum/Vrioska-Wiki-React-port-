import React, { useEffect } from 'react';
import PlayerContent from '../base_components/PlayerContent';
import PlayerSidebar from '../base_components/PlayerSidebar';
import '../../../styles/style.css';
import blueImage from '../../../styles/img/Blue.png'

const content = [
    "Blue is a Warforged whom stands at a whopping 4'3`\". They are most commonly seen wearing a large cloak that obscures a majority of their lower body. \
        They have demonstrated an ability to change their appearance somewhat, though the level of control they have over this is unclear at the moment. ",
    "Bitch",
    "Blue's origins are a mystery to all, including himself. When Blue met the party they were working as a tavern hand at the Moonweaver Tavern (TODO: Link). After meeting the party they were visited by a number of shadowy figures in bronze theatre masks who caused Blue's vision to distort and fail. They awoke from a strange dream featuring a man telling him to `come home` bearing the sigil of Eberron (TODO: Link) on their shoulder \
        According to Vecna (TODO: Link), Blue was originally created on the continent of Carcosa (TODO: Link) as a peacekeeping device meant to end all conflict, but the night before they could be activated they were stolen away by a number of deserting Repairers (TODO: Link).",
    "Within the party, Blue and Percy appear to get along best. The two can commonly be seen engaging in some form of tomfoolery, mischief, or shenanigans together",
    ["Quest: Learn the identity of your creator | Reward: Access to the Ophelia Module & Charge Shot"],
]
const Blue = () => {
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
                        imageURL={blueImage}
                        fullName="Blue"
                        pronouns="He/They"
                        aliases="Throne model 87-B"
                        race="Warforged"
                        classType="Fighter (Gunslinger)"
                        age="3 years"
                        languages="Lower Draconic (Common)"
                        places="Moonweaver Tavern (TODO: Link)"
                        family="???"
                        connections="SOLO (TODO: Link)"
                        professions="???"
                    />
                </div>
            </div>
        </div>
      );
};

export default Blue;