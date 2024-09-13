import React from "react";
import DeityContent from "../base_components/DeityContent";
import DeitySidebar from "../base_components/DeitySidebar";

const images = [];

const content = {
    appearance: <p>
    </p>,
    symbol: <p></p>,
    personality: <p></p>,
    tenants: <p></p>,
    bio: <p>One of the creators' supposed original children, whom slew its kindred in a bid for power. One of the Three Kings.</p>,
    artifacts: <p></p>,
    sites: <p></p>,
    relations: <p></p>,
    celestials: <ul>
        <li>Herald</li>
        <li></li>
    </ul>
}
const general= {
    name: "Yal'da-Baoth",
    titles: [
        "Lord of Flesh",
        "The Scarlet King",
        "The Vermillion Lord"
    ],
    spheres: [
        "Flesh",
        "Rot"
    ],
    symbols: [
        "Bloody crown(s)",
        "Human remains with fungal growths"
    ],
    gender: "N/A (It/Its)",
    
};

const worship = {
    religions: [

    ],
    worshippers: [

    ],
    holiday: "",
    temples: [],
    domains: [
        "Hunger",
        "Fungi",
        "Blood",
    ],
    patrons: [],
    artifacts: []
}

const YalDaBaoth = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className="character-container">
                    <DeityContent
                        info={content}
                    />
                    <DeitySidebar
                            images={images}
                            generalInfo={general}
                            worshipInfo={worship}
                    />
                </div>   
            </div>  
        </div>
    );
};

export default YalDaBaoth;