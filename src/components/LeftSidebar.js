import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import SearchBar from './SearchBar';

const links = [
  [ // Players
    { text: 'Blue', url: '/blue'},
    { text: 'Neomona', url: '/neomona'},
    // { text: 'Orris', url: '/orris'},
    { text: 'Ortlen', url: '/ortlen'},
    { text: 'Percy', url: '/percy'},
    { text: 'Rosen', url: '/rosen'},
    { text: 'Sabellax', url: '/sabellax'}
  ],
  [ // Notable NPCs

  ],
  [ // Factions

  ],
  [ // Nations
    { text: 'Dundaxian Empire', url : '/dundax'}
  ],
  [ // Settlements
    { text: 'Aberdeen', url: '/aberdeen'},
    { text: 'Icarus', url: '/icarus'}
  ],
  [ // Misc
    {text: 'Timekeeping', url: '/time'},
    {text: 'Inner Planes', url: '/inner_planes'},
    {text: "One True War/Great Drake War", url: '/one_true_war'},
    {text: 'Yal\'da-Baoth', url: '/yal\'da-baoth'},
    {text: "Alagadda", url: '/alagadda'},
    {text: 'Eberron', url: '/eberron'}
  ]
];

const LeftSidebar = () => {
  return (
    <div className="col" id="left">
      <Logo />
      <SearchBar linkGroups={links}/>
      <div id="left-sidebar-buttons">
        <details className="container-button" id="page-links">
          <summary>Player Characters</summary>
          <ul>
              {links[0].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
        <details className="container-button" id="page-links">
          <summary>Notable NPCs</summary>
          <ul>
              {links[1].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
        <details className="container-button" id="page-links">
          <summary>Factions</summary>
          <ul>
              {links[2].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
        <details className="container-button">
          <summary>Nation Notes</summary>
          <ul>
              {links[3].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
        <details className="container-button">
          <summary>Settlement Notes</summary>
          <ul>
              {links[4].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
        <details className="container-button">
          <summary>Misc. notes</summary>
          <ul>
              {links[5].map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default LeftSidebar;