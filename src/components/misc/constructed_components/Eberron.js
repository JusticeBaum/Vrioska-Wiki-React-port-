import React from "react";
import DeityContent from "../base_components/DeityContent";
import DeitySidebar from "../base_components/DeitySidebar";

const images = [];

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

const Eberron = () => {
    return (
        <div className="container">
            <div className="site-body">
                <div className="character-container"></div>   
                    <DeityContent 
                    />
                    <DeitySidebar
                            images={images}
                            generalInfo={general}
                            worshipInfo={worship}
                    />
            </div>  
        </div>
    );
};

export default Eberron;