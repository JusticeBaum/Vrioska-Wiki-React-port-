import React from 'react';


imageURL, [nationName, fullName, Type, HoS, HoG, military], [plane, continent, capital, religion, established, fell]

const HistorySidebar = ({
    imageURL,
    generalInfo ,
    historyInfo,
    cultureInfo
}) => {
    const [nationName, fullName, type, headOfGov, currentHead, military] = generalInfo;
    const [plane, continent, capital, established, fell] = historyInfo;
    const [language, religion] = cultureInfo;
  return (
    <aside className="sidebar">
      <h2 style={{ textAlign: 'center' }}>{nationName}</h2>
      <img src={imageURL} alt="Character" style={{ width: '100%', height: 'auto' }} />
      <h2>General Information</h2>
      <ul>
        <li><strong>Full Name: </strong>{fullName}</li>
        <li><strong>Type: </strong>{type}</li>
        <li><strong>Head of Government: </strong>{headOfGov}</li>
        <li><strong>Current Head of State: </strong>{currentHead}</li>
        <li><strong>Military: </strong>{military}</li>
      </ul>
      <h2>Historical Information</h2>
      <ul>
        <li><strong>Plane: </strong></li>
        <li><strong>Continent: </strong></li>
        <li><strong>Capital: </strong></li>
        <li><strong>Established: </strong></li>
        <li><strong>Fell: </strong></li>
      </ul>
      <h2>Cultural Information</h2>
      <ul>
        <li><strong>Religion: </strong></li>
        <li><strong>Language(s): </strong></li>
      </ul>
    </aside>
  );
};

export default HistorySidebar;