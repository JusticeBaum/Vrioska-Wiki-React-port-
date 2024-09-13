import React from "react";
import DeityContent from "../base_components/DeityContent";
import DeitySidebar from "../base_components/DeitySidebar";
import ySign from '../../../styles/img/yellow_sign.png'

const images = {
    src: ySign, 
    desc: "The Yellow Sign, most common symbol of Eberron"
};

const content = {
    appearance: <p>
    </p>,
    symbol: <p></p>,
    personality: <p></p>,
    tenants: <p></p>,
    bio: <p>One of the creators supposed original children, whom slew its kindred in a bid for power. One of the Three Kings.</p>,
    artifacts: <p></p>,
    sites: <p></p>,
    relations: <p></p>,
    celestials: <p></p>
}
const general= {
    name: "Eberron",
    titles: [
        "Lord of Order",
        "The Yellow King",
        "The Great Equalizer"
    ],
    spheres: [
        "",
    ],
    symbols: [
        "Yellow Sign",
        "Scales",
        "Machinery, especially clockwork"
    ],
    gender: "N/A (It/Its)",
};

const worship = {
    religions: [
        "",
    ],
    worshippers: [],
    holiday: "",
    temples: [],
    domains: [],
    patrons: [],
    artifacts: []
}

const Eberron = () => {
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

export default Eberron;