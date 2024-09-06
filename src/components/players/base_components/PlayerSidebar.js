import React from 'react';

const PlayerSidebar = ({
  charName,
  imageURL,
  fullName,
  pronouns,
  aliases,
  race,
  classType,
  age,
  languages,
  places,
  family,
  connections,
  professions
}) => {
  return (
    <aside className="sidebar">
      <h2 style={{ textAlign: 'center' }}>{charName}</h2>
      <img src={imageURL} alt="Character" style={{ width: '100%', height: 'auto' }} />
      <h2>Character Information</h2>
      <ul>
        <li><strong>Full Name: </strong>{fullName}</li>
        <li><strong>Pronouns: </strong>{pronouns}</li>
        <li><strong>Aliases: </strong>{aliases}</li>
        <li><strong>Race: </strong>{race}</li>
        <li><strong>Class: </strong>{classType}</li>
        <li><strong>Age: </strong>{age}</li>
        <li><strong>Languages: </strong>{languages}</li>
        <li><strong>Place(s): </strong>{places}</li>
        <li><strong>Family: </strong>{family}</li>
        <li><strong>Connections: </strong>{connections}</li>
        <li><strong>Profession(s): </strong>{professions}</li>
      </ul>
    </aside>
  );
};

export default PlayerSidebar;