import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.scss'

const localizer = momentLocalizer(moment);

const Calendar = ({ events }) => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    setCalendarEvents(events);
  }, [events]);

  return (
    <BigCalendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      components={{
        eventWrapper: (props) => (
          <div className="custom-event-wrapper">
            {props.children}
          </div>
        )
      }}
      className="height-600"
    />
  );
};

export default Calendar;
