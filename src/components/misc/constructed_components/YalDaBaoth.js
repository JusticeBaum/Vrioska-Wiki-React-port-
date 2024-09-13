import React from "react";
import DeityContent from "../base_components/DeityContent";
import DeitySidebar from "../base_components/DeitySidebar";

const images = [];

const content = {
    appearance: <p>
        bitch
    </p>,
    symbol: <p>a bitch</p>,
    personality: <p>bitchy</p>,
    tenants: <p></p>,
    bio: <p>One of the Three Kings, who slew their brothers in a bid for power</p>,
    artifacts: <p></p>,
    sites: <p></p>,
    relations: <p></p>,
    celestials: <p></p>
}
const general= {
    name: "",
    titles: [
    ],
    spheres: [
        "",
    ],
    symbols: [

    ],
    gender: "Masculine (He/Him)",
    religion: "?",
    worshippers: "",
    holiday: "",
    temples: "",
    domains: "",
    patron_type: "",
    artifacts: ""
};

const worship = {
    religions: [
        "Dundaxian Polytheism",
    ],
    worshippers: [],
    holiday: "",
    temples: [],
    domains: [],
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