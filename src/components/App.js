
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;



