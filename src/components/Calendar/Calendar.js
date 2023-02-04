import React, { useState, useEffect } from 'react';
import {Calendar as BigCalendar} from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const Calendar = ({ events }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(events);
  }, [events]);

  return (
    <BigCalendar
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
    />
  );
};

export default Calendar;
