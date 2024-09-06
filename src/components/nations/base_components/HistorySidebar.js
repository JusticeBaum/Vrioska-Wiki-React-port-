import React from 'react';

const HistorySidebar = ({
    imageURL,
    generalInfo: { nationName, fullName, type, headOfGov, currentHead, military },
    historyInfo: { plane, continent, capital, established, fell},
    cultureInfo: { religion, language, population }
}) => {
    // const [nationName, fullName, type, headOfGov, currentHead, military] = generalInfo ;
    // const [plane, continent, capital, established, fell] = historyInfo;
    // const [religion, language, population] = cultureInfo;
  return (
    <aside className="sidebar">
      <h2 style={{ textAlign: 'center' }}>{ nationName }</h2>
        <img src={imageURL} alt="Character" style={{ width: '100%', height: 'auto' }} />
        <h2>General Information</h2>
        <ul>
          <li><strong>Full Name: </strong>{ fullName }</li>
          <li><strong>Type: </strong>{ type }</li>
          <li><strong>Head of Government: </strong>{ headOfGov }</li>
          <li><strong>Current Head of State: </strong>{ currentHead }</li>
          <li id = "military"><strong>Military: </strong>{ military.map((item, index) => (
          <li key={index}>{item}</li>
        ))}</li>
        </ul>
      <h2>Historical Information</h2>
        <ul>
          <li><strong>Plane: </strong>{plane}</li>
          <li><strong>Continent: </strong>{continent}</li>
          <li><strong>Capital: </strong>{capital}</li>
          <li><strong>Established: </strong>{established}</li>
          <li><strong>Fell: </strong>{fell}</li>
        </ul>
      <h2>Cultural Information</h2>
      <ul>
        <li><strong>Religion: </strong>{religion}</li>
        <li><strong>Language(s): </strong>{language}</li>
        <li><strong>Population: </strong>{population}</li>
      </ul>
    </aside>
  );
};

export default HistorySidebar;