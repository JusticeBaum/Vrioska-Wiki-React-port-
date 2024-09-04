import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import './styles/style.css';

//TODO: String that maps character name string to react components
const players = [
  'Blue',
  'Neomona',
  'Orris',
  'Ortlen',
  'Percy',
  'Rosen',
  'Sabellax',
];

const nations = [

];

const misc = [

];

const generateRoutes = (items) => {
  return items.map((item, index) => (
    <Route
      key={index}
      path={`/${item.toLowerCase()}`}
      element={<MainContent />}
    />
  ));
};

// Returns routes for all player characters
const generatePlayerRoutes = (players) => {
  // return players.map((character, index) => (
  //   <Route
  //     key={index}
  //     path={`/${character.toLowerCase()}`}
  //     element={<MainContent />}
  //   />
  // ));
  return [

  ]
};

const App = () => {
  return (
    <Router>
      <div className="Container">
        <div className="site-body">
          <LeftSidebar />
          {/* <MainContent /> */}
          <Routes>
            <Route path = "/" element={<MainContent />}/>
            {generateRoutes(players)}
            {generateRoutes(nations)}
            {generateRoutes(misc)}
          </Routes>
          <RightSidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
