import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import './styles/style.css'; // Ensure your styles are imported

const App = () => {
  return (
    <div>
        <div class = "title-header">
            <h1 id = "site-header">Codex Vrioska</h1>
        </div>
        <div className="character-container">
        <Content
            title="Character Overview"
            headings={[
            "Description",
            "Appearance",
            "Personality",
            "Biography",
            "Relationships",
            "Character Information",
            "Completed Quests"
            ]}
            listItems={["N/A"]}
        />
        <Sidebar
            title="Character"
            imageSrc="path/to/image.jpg" // Replace with actual image path
            altText="Character"
            info={[
            { label: "Full Name", value: "" },
            { label: "Pronouns", value: "" },
            { label: "Aliases", value: "" },
            { label: "Race", value: "" },
            { label: "Class", value: "" },
            { label: "Age", value: "" },
            { label: "Languages", value: "" },
            { label: "Place(s)", value: "" },
            { label: "Family", value: "" },
            { label: "Connections", value: "" },
            { label: "Profession(s)", value: "" }
            ]}
        />
        </div>
    </div>
  );
};

export default App;