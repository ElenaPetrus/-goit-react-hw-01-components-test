import React from 'react';

import PaintingList from './components/Paintings/PaintingList';
import paintingData from './data/Paintings.json';

import {Button} from'./components/Button/Button';
import {Counter} from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="container">
     <PaintingList paintings={paintingData}/>
     <Button/>
     <Counter initialValue={100}/>
     <Dropdown/>
    </div>
  );
}

export default App;
