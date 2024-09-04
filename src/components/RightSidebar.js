import React, { useEffect, useState } from 'react';

const RightSidebar = ({ center }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headerTag = center == 'MainContent' ? 'h1' : 'h2';

    const hElements = Array.from(document.querySelectorAll(headerTag));
    const hTexts = hElements.map((heading) => heading.textContent);
    setHeadings(hTexts);
  }, [center]);

  return (
    <div className="col" id="right">
      <h3>On this page</h3>
      <ul className="right-headings" id="headings-list">
        {headings.map((heading, index) => (
          <li key={index}>{heading}</li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;