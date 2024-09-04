import React, { useEffect, useState } from 'react';

const RightSidebar = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Find all h1 elements on the page
    const h1Elements = Array.from(document.querySelectorAll('h1'));
    // Extract their text content
    const h1Texts = h1Elements.map((heading) => heading.textContent);
    // Update state with the headings
    setHeadings(h1Texts);
  }, []); // Empty dependency array means this effect runs once after initial render

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