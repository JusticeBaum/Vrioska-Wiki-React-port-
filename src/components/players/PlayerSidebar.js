import React from 'react';

const Sidebar = ({ title, imageSrc, altText, info }) => {
  return (
    <aside className="sidebar">
      {title && <h2 style={{ textAlign: 'center' }}>{title}</h2>}
      {imageSrc && <img src={imageSrc} alt={altText} />}
      {info && info.length > 0 && (
        <ul>
          {info.map((item, index) => (
            <li key={index}>
              <strong>{item.label}: </strong>{item.value}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;