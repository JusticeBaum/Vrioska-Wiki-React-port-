import React from "react";
import Slideshow from '../../Slideshow'

const DeitySidebar = ({
    images,
    generalInfo: { name, titles, spheres, symbols, gender},
    worshipInfo: { religions, worshippers, holiday, temples, domains, patrons, artifacts},
}) => {
    return (
        <aisde className="sidebar">
            <h2 style={{ textAlign: 'center' }}>{ name }</h2>
            <Slideshow images={images}/>
            <h2>Deity Information</h2>
            <ul>
                <li>
                    <strong>Titles: </strong>
                    { titles.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </li>
                <li>
                    <strong>Spheres of Influence: </strong>
                    { spheres.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </li>
                <li>
                    <strong>Symbols: </strong>
                    { symbols.map((item, index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
                <li><strong>Gender: </strong>{ gender }</li>
            </ul>
            <h2>Worship Information</h2>
            <ul>
                <li>
                    <strong>Associated religion(s): </strong>
                    {religions.map((item,index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
                <li>
                    <strong>Worshippers: </strong>
                    {worshippers.map((item,index) => {
                        <li key = { index }>{ item }</li>
                    })}
                </li>
                <li>
                    <strong>Holy day: </strong>
                    {holiday}
                </li>
                <li>
                    <strong>Major temples: </strong> 
                    {temples.map((item, index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
                <li>
                    <strong>Associated Domains: </strong> 
                    {domains.map((item, index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
                <li>
                    <strong>Associated Patron Archetypes: </strong> 
                    {patrons.map((item, index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
                <li>
                    <strong>Artifacts: </strong> 
                    {artifacts.map((item, index) => {
                        <li key = {index}>{item}</li>
                    })}
                </li>
            </ul>
        </aisde>
    )
}

export default DeitySidebar;