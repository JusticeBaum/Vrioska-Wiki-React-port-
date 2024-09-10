import React from 'react';
import Slideshow from '../../Slideshow';

const CitySidebar = ({
    images,
    generalInfo: { name, constructed, leader, currentLead },
    locationInfo: { plane, contienent, region, districts},
    societyInfo: { population, races, affiliation}
}) => {
  return (
    <aside className="sidebar">
      <h2 style={{ textAlign: 'center' }}>{ name }</h2>
        <Slideshow images = {images}/>
        <h2>General Information</h2>
        <ul>
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