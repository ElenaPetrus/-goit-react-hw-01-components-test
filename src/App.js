import React from 'react';

import PaintingList from './components/Paintings/PaintingList'
import paintingData from './data/Paintings.json';

function App() {
  return (
    <div className="container">
     <PaintingList paintings={paintingData}/>
    </div>
  );
}

export default App;
