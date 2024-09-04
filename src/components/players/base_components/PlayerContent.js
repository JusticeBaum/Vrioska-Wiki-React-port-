import React from 'react';

const PlayerContent = ({
  appearanceContent,
  personalityContent,
  biographyContent,
  relationshipsContent,
  characterInfoContent,
  completedQuestsItems
}) => {
  return (
    <section className="content">
      <h1>Description</h1>
      
      <h2>Appearance</h2>
      <p>{appearanceContent}</p>
      
      <h2>Personality</h2>
      <p>{personalityContent}</p>
      
      <h1>Biography</h1>
      <p>{biographyContent}</p>
      
      <h1>Relationships</h1>
      <p>{relationshipsContent}</p>
      
      <h1>Character Information</h1>
      <p>{characterInfoContent}</p>
      
      <h2>Completed Quests</h2>
      <ul>
        {completedQuestsItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default PlayerContent;