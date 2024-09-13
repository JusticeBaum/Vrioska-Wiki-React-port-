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
    celestials: <p></p>
}
const general= {
    name: "Alagadda",
    titles: [
        "Lord of Illusions",
        "Violet King",
        "Silent King"
    ],
    spheres: [
        "Illusion",
        "Storm"
    ],
    symbols: [
        "Vacant throne",
        "Noose"
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

const Alagadda = () => {
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

export default Alagadda;