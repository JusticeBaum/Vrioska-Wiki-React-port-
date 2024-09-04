import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../styles/img/logo.jpg';
import searchIcon from '../styles/icons/search.svg';

const LeftSidebar = () => {
  return (
    <div className="col" id="left">
      <img src={logo} alt="Site Logo" className="site-logo" />
      <form className="search-container">
        <span className="search-icon">
          <img src={searchIcon} alt="Icon of a magnifying glass in a minimalistic style" />
        </span>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Search pages"
            id="search-input"
          />
          <br />
          <ul className="left-dropdown" id="dropdown">
            {/* Matches will be inserted here */}
          </ul>
        </div>
      </form>
      <div id="left-sidebar-buttons">
        <details className="container-button" id="page-links">
          <summary>Player Characters</summary>
          <ul>
            <li><Link to="/blue">Blue</Link></li>
            <li><Link to="/neomona">Neomona</Link></li>
            <li><Link to="/orris">Orris</Link></li>
            <li><Link to="/ortlen">Ortlen</Link></li>
            <li><Link to="/percy">Percy</Link></li>
            <li><Link to="/rosen">Rosen</Link></li>
            <li><Link to="/sabellax">Sabellax</Link></li>
          </ul>
        </details>
        <details className="container-button">
          <summary>Nation Notes</summary>
        </details>
        <details className="container-button">
          <summary>Misc. notes</summary>
          <ul>
            <li><a href="./html_pages/timekeeping.html">Calendar</a></li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default LeftSidebar;