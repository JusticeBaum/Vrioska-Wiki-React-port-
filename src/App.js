import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import SiteHeader from './components/SiteHeader';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import { Blue, Neomona, Ortlen, Rosen, Percy, Sabellax} from './components/players/constructed_components/index'
import { Dundax } from './components/nations/constructed_components/index'
import { Aberdeen, Icarus } from './components/settlements/constructed_components/index'
import { Alagadda, InnerPlanes, OneTrueWar, Time, YalDaBaoth, Eberron } from './components/misc/index'
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
  {
    name: 'Ortlen',
    component: Ortlen
  },
  {
    name: 'Percy',
    component: Percy
  },
  {
    name: 'Rosen',
    component: Rosen
  },
  {
    name: 'Sabellax',
    component: Sabellax
  }
];

const nations = [
  {
    name: 'Dundax',
    component: Dundax
  }
];

const settlements = [
  // {
  //   name: "Penrith",
  //   component: Penrith
  // },
  // {
  //   name: "Elsmwell",
  //   component: Elmswell
  // },
  // {
  //   name: "Luodon",
  //   component: Luodon
  // },
  {
    name: "Aberdeen",
    component: Aberdeen
  },
  // {
  //   name: "Icarus",
  //   component: Icarus
  // }
]

const misc = [
  {
    name: 'Time',
    component: Time
  },
  {
    name: 'Inner_Planes',
    component: InnerPlanes
  },
  {
    name: 'One_True_War',
    component: OneTrueWar
  },
  {
    name: "Yal'Da-Baoth",
    component: YalDaBaoth
  },
  {
    name: "Alagadda",
    component: Alagadda
  },
  {
    name: "Eberron",
    component: Eberron
  }
];

const generateRoutes = (items) => {
  return items.map((item, index) => (
    <Route
      key={index}
      path={`/${item.name.toLowerCase()}`}
      element={< item.component />}
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
      {generateRoutes(nations)}
      {generateRoutes(settlements)}
      {generateRoutes(misc)}
    </Routes>
  );
};

const App = () => {

  const [centerComponent, setCenterComponent] = useState('');

  return (
    <Router>
      <div className="Container">
        <div className="site-body">
          <LeftSidebar />
          <div className='center'>
          <SiteHeader/>
          <RoutesWrapper setCurrentComponent={setCenterComponent} />
          </div>
          <RightSidebar center = {centerComponent}/>
        </div>
      </div>
    </Router>
  );
};

export default App;
