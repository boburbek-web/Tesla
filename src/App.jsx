import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Model3 from './components/Model3/Model3';
import ModelY from './components/ModelY/ModelY';
import ModelS from './components/ModelS/ModelS';
import ModelX from './components/ModelX/ModelX';
import Panels from './components/Panels/Panels';
import Roof from './components/Roof/Roof';
import Accessories from './components/Accessories/Accessories';
const App = () => {
  return (
    <>

      <Navbar />

      <Model3 />
      <ModelY />
      <ModelS />
      <ModelX />
      <Panels />
      <Roof/>
      <Accessories />
    </>
  );
};

export default App;