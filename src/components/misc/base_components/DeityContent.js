import React from "react";

const DeityContent = ({
    info: {appearance, symbol, personality, tenants, bio, artifacts, sites, relations, celestials}
}) => {
    return (
        <section className="content">
            <h2>Description</h2>
            <h3>Appearance</h3>
                {appearance}
            <h3>Symbol</h3>
                {symbol}
            <h3>Personality</h3>
                {personality}
            <h2>Commandments</h2>
                {tenants}
            <h2>Biography</h2>
                {bio}
            <h2>Artifacts</h2>
                {artifacts}
            <h2>Places of worship and holy sites</h2>
                {sites}
            <h2>Relationships</h2>
                {relations}
            <h2>Celestials</h2>
                {celestials}
        </section>
    );
};

export default DeityContent;