
import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from './components/Calendar/Calendar';

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="*" element={<Calendar />} />
    </Routes>
  </Router>
  );
};

export default App;

