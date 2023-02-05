
import './App.scss';

import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';

const events = [
  {
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    title: "Event 1"
  },
  {
    start: new Date(new Date().getTime() + 86400000),
    end: new Date(new Date().getTime() + 86400000 + 3600000),
    title: "Event 2"
  }
];

const App = () => {
  const [selectedEvents] = useState(events);

  return (
    <div className="App">
      <Calendar events={selectedEvents} />
    </div>
  );
};

export default App;

