import React from 'react';

const CitySidebar = ({
    imageURL,
    generalInfo: { nationName, fullName, constructed, leader, currentLead },
    locationInfo: { plane, contienent, region, districts, points_of_interest},
    societyInfo: { population, races, affiliation}
}) => {
  return (
    <aside className="sidebar">
      <h2 style={{ textAlign: 'center' }}>{ nationName }</h2>
        <img src={imageURL} alt="Character" style={{ width: '100%', height: 'auto' }} />
        <h2>General Information</h2>
        <ul>
          <li><strong>Full Name: </strong>{ fullName }</li>
          <li><strong>Constructed: </strong>{ constructed }</li>
          <li><strong>Leader: </strong>{ leader }</li>
          <li><strong>Current Leader: </strong>{ currentLead }</li>
        </ul>
      <h2>Location Information</h2>
        <ul>
          <li><strong>Plane: </strong>{ plane }</li>
          <li><strong>Continent: </strong>{ contienent }</li>
          <li><strong>Region: </strong>{ region }</li>
          <li><strong>Districts: </strong>{ districts }</li>
          <li><strong>Points of Interest: </strong>{points_of_interest }</li>
        </ul>
      <h2>Societal Information</h2>
      <ul>
        <li><strong>Population: </strong>{ population }</li>
        <li><strong>Races: </strong>{ races }</li>
        <li><strong>Affiliation: </strong>{ affiliation }</li>
      </ul>
    </aside>
  );
};

export default CitySidebar;