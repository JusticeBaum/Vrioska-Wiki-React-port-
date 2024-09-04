import React from 'react';
import { Image }  from 'react-native';

const Sidebar = ({ title, imageSrc, altText, info }) => {
  return (
    <aside className="sidebar">
      {title && <h2 style={{ textAlign: 'center' }}>{title}</h2>}
      <img src={imageSrc} alt="Character" />
      <Image source = {{imageSrc}}/>
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