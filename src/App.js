import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import SiteHeader from './components/SiteHeader';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import { Blue, Neomona, Ortlen, Rosen, Percy, Sabellax} from './components/players/constructed_components/index'
import './styles/style.css';

const players = [
  {
    name: "Blue",
    component: Blue
  },
  {
    name: "Neomona",
    component: Neomona
  },
  // 'Orris',
  {
    name: 'Ortlen',
    component: Ortlen
  },
  // 'Percy',
  {
    name: 'Percy',
    component: Percy
  },
  {
    name: 'Rosen',
    component: Rosen
  },
  // 'Sabellax',
  {
    name: 'Sabellax',
    component: Sabellax
  }
];

const nations = [
];

const misc = [
  // {
  //   name: 'Calendar'
  //   component: Calendar
  // }
];

const generateRoutes = (items) => {
  return items.map((character, index) => (
    <Route
      key={index}
      path={`/${character.name.toLowerCase()}`}
      element={< character.component />}
    />
  ));
};

// Updates the rightSidebar as to what the center component is
const RoutesWrapper = ( {setCurrentComponent} ) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setCurrentComponent('Home');
    } else {
      setCurrentComponent('Other');
    }
  }, [location.pathname, setCurrentComponent]);

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      {generateRoutes(players)}
      {/* {generateRoutes(nations)} */}
      {/* {generateRoutes(misc)} */}
    </Routes>
  );
};

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('');
  return (
    <Router>
      <div className="Container">
        <div className="site-body">
          <LeftSidebar />
          {/* <MainContent /> */}
          {/* <Routes>
            <Route path = "/" element={<MainContent />}/>
             {generateRoutes(players)}
             {/* {generateRoutes(nations)} */}
            {/* {generateRoutes(misc)} */}
          {/* </Routes> */}
          <div className='center'>
          <SiteHeader/>
          <RoutesWrapper setCurrentComponent={setCurrentComponent} />
          </div>
          <RightSidebar center = {currentComponent}/>
        </div>
      </div>
    </Router>
  );
};

export default App;
