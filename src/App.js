
import './App.scss';

import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';

const events = [
  {
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    title: 'Some Event',
  },
];

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState(events);

  return (
    <div className="App">
      <Calendar events={selectedEvents} />
    </div>
  );
};

export default App;

