import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Main from './components/main/Main'
import Headernav from './components/header/Headernav'
import Detilis from './components/main/Detilis';


const App = () => {
  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Detilis/>} />
        </Routes>
      </BrowserRouter>

  );
};

export default App