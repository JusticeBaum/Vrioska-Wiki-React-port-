import React from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';
import map from '../styles/img/Vrioska.jpg';

const MainContent = () => {
  return (
    <div className = "center">
                    <h1>Welcome!</h1>
                        <p>This wiki serves as a resource for players in `Vrioska`, a homebrew TTRPG setting initially designed with DnD 5e in mind. Do note that information presented is from the player's perspective
                            and as such should not be considered as necessarily complete or wholly accurate to the 'actual' lore.</p>
                    <h1>History</h1>
                        <p>The world of Vrioska is, by most scholars' estimation, approximately one thousand years old, with the earliest historical record being dated 773 <Link to="/time">PB</Link>.
                            The name 'Vrioska' is used to collectively refer to the four <Link to = "/inner_planes">Inner Planes</Link> and the cultures therein.</p>
                        <h2>Terrestrial History</h2>
                            <p>Shortly after the formation of Vrioska, it was populated by the first lifeforms: the dragons. These dragons were the dominant species of the planes for approximately 800 years,
                                ruling the races they viewed as beneath them with an iron fist. Forced labor en masse was the norm, as was wanton razing of whole continents. Scholars disagree on the exact start year of our uprising 
                                against the drakes, but the range most oft heard is between 280 - 247 PB. This conflict became known as the <Link to = '/one_true_war'><em>One True War</em>'</Link> or the '<em>Great Drake War</em>'.</p>
                        <h2>Cosmology</h2>
                            <p>All culture's religions or belief systems are, by definition, disparate and occasionally contradictory. There are, however, some common threads through which a basic cosmological history can be gathered.</p>
                            <ol>
                                <li>There exists/once existed an initial creator(s) who is responsible for creating the Inner Planes and the Rift</li>
                                <li>This creator deity spawned ~7 children to assist in the governance of the planes/creation of life.</li>
                                <li>These children created the Dragons as the first lifeforms.</li>
                                <li>These children engaged in a bloody conflict (motivations vary but the most commonly agreed upon is to claim the slain child's power as one's own) that killed all but three of them. The three are <em>always </em>
                                    as follows:
                                    <ul>
                                        <li><Link to = "yal'da-baoth">Yal'da-Baoth: Lord of Flesh | The Scarlet King | The Vermillion Lord</Link></li>
                                        <li><Link to = "alagadda">Alagadda: Lord of Illusions | The Violet King | The Silent Kink</Link></li>
                                        <li><Link to = "eberron">Eberron: Lord of Order | The Yellow King | The Great Equalizer</Link></li>
                                    </ul>
                                </li>
                                <li>These three continued making the rest of life as we know it and assisted them in their eventual uprising against the dragons</li>
                                <li>The creator(s) tired of their bickering and thought it wrong for them to interfere with mortal life and did SOMETHING to get rid of them. The exact nature of this punishment is highly contested.</li>
                                <li>The creator(s) then spawned new deities to fill their place. This new pantheon has very little cross-cultural cohesion.</li>
                            </ol>
                    <h1>Infrastructure</h1>
                        <p>Though the planes all contain their own unique traits and cultures, there do exist some similarities between them.</p>
                        <h2>Thresholds</h2>
                            <p>Thresholds are designated spots within the Planes where a permanent means of travel to one or more of the Inner Planes is possible.</p>
                        <h2>Ocean Worlds</h2>
                            <p>With the exception of the Umbral Plains, all the planes are predominatly covered by oceans.</p>
                        <h2>Planar Geography</h2>
                            <p>The exact layout of the planes with relation to each other is a hotly debated topic, but there is some consensus.</p>
                            <h3>Axioms of Planar Geometry: </h3>
                            <ul>
                                <li>There is no overlap between the Inner Planes.</li>
                                <li>Planes are roughly circular in shape.</li>
                                <li>Planes are of a fixed size.</li>
                                <li>Planes are somehow connected such that one can travel between them using teleportation. The exact method and nature of said connection is contested, however.</li>
                                <li>The Inner Planes are isolated from the Outer through the Rift.</li>
                                <li>The Planes share the same sun.</li>
                                <li>The Planes share the same three moons, though their astral footprint varies.</li>
                            </ul>
                    <h1>Culture</h1>
                        <p>Again, the intricacies of culture are many. But there exist very few similarities. They are not unanimous, but they are common.</p>
                        <ul>
                            <li>Minimum of mistrust against lineages with ties to the Outer Planes. Tiefling, Genasi, etc.</li>
                            <li>Worship of the three banished kings is at a minimum looked down upon and not done openly.</li>
                        </ul>
                    <h1>Map</h1>
                        <Map url={map}/>
                </div>
  );
}

export default MainContent;