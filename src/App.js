import './App.css';
import CreateRecord from './components/Create';
import EditRecord from './components/Edit';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateRecord />} />
          <Route path='/edit' element={<EditRecord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//1.07.43
