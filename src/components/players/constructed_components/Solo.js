import React from "react";
import heights from  "../../../styles/img/solo_chart.png"
import group from "../../../styles/img/SoloRoster.png"
import { Link } from "react-router-dom";

const Solo = () => {
    return (
        <div className="Container">
            <div className="site-body">
                <div className="center">
                <h1>History</h1>
                <p>The party has their beginnings in Penrith (TODO: Link to Penrith). <Link to = "/neomona">Neomona</Link> during a visit to the Moonweaver Tavern, met current server <Link to = "/blue">Blue</Link> and later resident  
                    <Link to = "/percy">Percy</Link>. The owner of the tavern, one Mollymauk Tealeaf (TODO: Link), beseeched the Page and the two 'freeloaders' to take care of the gang that's been raiding his supply line.</p>
                <p>The newly formed party then migrated southward, bound for Icarus (TODO: Link) to witness the anointing of the new Tidecaller (TODO: Link). Along the way, the party came across the city of Elmswell (TODO: Link) being
                    beseiged by goblins with an affliction that slowly turned their skin to silver. After questioning the townsfolk and Watchmaster Bryce Visoren the party learned that a nearby goblin settlement by the name of Luodon (TODO: Link) that Elmswell was previously friendly
                    with has been taking incresingly hostile actions. The party traveled underground, met <Link to  = "/sabellax">Sabellax</Link> who was taking shelter in the city, and slew the beast immediately responsible for the plague; 
                    An individual (TODO: Link) was able to escape whom destroyed the city in the process.
                </p>
                <p>
                </p>
                <h1>Members</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td><Link to = "/blue">Blue</Link></td>
                        <td>Fighter(Gunslinger)</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td><Link to = "/neomona">Neomona</Link></td>
                        <td>Wizard (Divination)</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td><Link to = "ortlen">Ortlen</Link></td>
                        <td>Barbarian/Rogue</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td><Link to = "/percy">Percy Granosh</Link></td>
                        <td>Druid (Wildfire)</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td><Link to = "/rosen">Rosen Graves</Link></td>
                        <td>Illrigger (Hellspeaker)</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td><Link to = "/sabellax">Sabellax Stalleskur</Link></td>
                        <td>Beastheart (Hunter)</td>
                        <td>Fucked</td>
                    </tr>
                </table>
                <div className="party-container">
                    <img src = {group} style = {{height: 700, width: 700}}/>
                    <img src = {heights}/>
                </div>
                <h1>Companions</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Spicy Mike</td>
                        <td>Fennerik</td>
                        <td>Alive</td>
                    </tr>
                    <tr>
                        <td>Nidhogg</td>
                        <td>Drangolin</td>
                        <td>Also Fucked</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Solo;