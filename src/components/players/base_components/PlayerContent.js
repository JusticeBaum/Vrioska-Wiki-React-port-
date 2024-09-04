import React from 'react';

const Content = ({ title, headings, listItems }) => {
  return (
    <section className="content">
      {title && <h1>{title}</h1>}
      {headings && headings.map((heading, index) => (
        <h2 key={index}>{heading}</h2>
      ))}
      {listItems && listItems.length > 0 && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Content;