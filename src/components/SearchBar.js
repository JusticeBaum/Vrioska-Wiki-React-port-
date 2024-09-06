import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import searchIcon from '../styles/icons/search.svg';

const SearchBar = ({ linkGroups }) => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const links = linkGroups.flat();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchInputRef.current && !searchInputRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const filterItems = (query) => {
    const lowerQuery = query.toLowerCase();
    return links.filter(({ text }) => text.toLowerCase().includes(lowerQuery));
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    const filtered = filterItems(query);
    setFilteredItems(filtered);
    setIsDropdownVisible(filtered.length > 0);
  };

  const handleItemClick = (url) => {
    navigate(url);
  };

  return (
    <form className="search-container">
      <span className="search-icon">
        <img src={searchIcon} alt="Icon of a magnifying glass in a minimalistic style" />
      </span>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Search pages"
          value={query}
          onChange={handleInputChange}
          ref={searchInputRef}
        />
        <ul
          className="left-dropdown"
          ref={dropdownRef}
          style={{ display: isDropdownVisible ? 'block' : 'none' }}
        >
          {filteredItems.map(({ text, url }, index) => (
            <li key={index} onClick={() => handleItemClick(url)}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default SearchBar;