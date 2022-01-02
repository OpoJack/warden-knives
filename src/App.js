import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes} from 'react-router-dom';

//Change to knife page later
const HatsPage = () => (
  <div className='hats'>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop/hats' element={<HatsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
