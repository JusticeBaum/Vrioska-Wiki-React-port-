import React, { useEffect, useState } from 'react';

const RightSidebar = ({ center }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    console.log(center)
    const headerTag = center == 'Home' ? 'h1' : 'h2';

    const hElements = Array.from(document.querySelectorAll(headerTag));
    const hTexts = hElements.map((heading) => heading.textContent);

    const headings = []
    for (let i = 1; i < hTexts.length; i++) {
      headings.push(<li>{hTexts[i]}</li>)
    }

    setHeadings(headings)
  }, [center]);



  return (
    <div className="col" id="right">
      <h3>On this page</h3>
      <ul className="right-headings" id="headings-list">
        {headings}
      </ul>
    </div>
  );
};

export default RightSidebar;